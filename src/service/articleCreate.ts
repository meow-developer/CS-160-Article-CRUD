import crypto, { UUID } from 'crypto';
import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';
import ArticleStorage from  '../repo/articleStorage.js';
import { ServiceRestError } from './ServiceRestError.js';
import formidable from 'formidable';
import { readPdfText } from 'pdf-text-reader';

export default class ArticleCreateService {
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private articleStorage: ArticleStorage = ArticleStorage.getInstance();

    private generateUUIDForArticleStore(): UUID {
        return crypto.randomUUID();
    }

    private async checkUUIDDbCollision(uuid: UUID): Promise<boolean> {
        const articleCount = await this.articleDb.countArticleByStorageUUID(uuid);
        const isUUIDCollided = articleCount > 0;
        
        return isUUIDCollided;
    }

    private async safeUUIDGeneration(): Promise<UUID>{
        const MAX_TRIES = 2; //It's impossible to have a collision with 2 tries
        let tries = 0;
       
        do {
            const uuid = this.generateUUIDForArticleStore();
            const isUUIDCollision = await this.checkUUIDDbCollision(uuid);

            if (!isUUIDCollision) {
                return uuid;
            }
            tries++;
        } while (tries < MAX_TRIES);

        throw new ServiceRestError("Failed to generate UUID");
    }

    private async writeArticleToDb(
        articleFileName: string,
        articleStorageUUID: UUID,
        articleTextSummary: string
    ){
        const article: Article = {
            Title: articleFileName,
            StorageArticleUUID: articleStorageUUID,
            Active: true,
            PdfFileSummary: articleTextSummary
        }
        return await this.articleDb.insertArticle(article);
    }

    private async deleteArticleFromDb(articleStorageUUID: UUID){
        await this.articleDb.deleteArticleByStorageUUID(articleStorageUUID);
    }

    private async deleteArticleFromStorage(articleStorageUUID: UUID){
        await this.articleStorage.deleteArticle(articleStorageUUID);
    }

    private async saveArticleToStorage(
        articleStorageUUID: UUID,
        articleFilePath: string
    ){
        await this.articleStorage.saveArticle(
            articleStorageUUID + ".pdf",
            articleFilePath
        )
    }

    private async getPdfText(filePath: string){
        try {
            return await readPdfText({ filePath: filePath});
        } catch (err) {
            console.error(err);
            throw new Error("Error reading pdf text");
        }
    }

    private getPdfTextSummary(text: string): string {
        //Get the first 50 words
        const WORD_COUNT = 50;

        const words = text.split(" ");
        const summary = words.slice(0, WORD_COUNT).join(" ");
        return summary;
    }

    private simplifyFileName(fileName: string): string {
        const concatFileName = fileName.replace(".pdf", "");
        return concatFileName;
    }

    /**
     * 
     * @returns {Promise<number>} - The ID of the article
     */
    public async save(file: formidable.File): Promise<number>{
        const articleStorageUUID = await this.safeUUIDGeneration();
        try {
            const articleFileName = this.simplifyFileName(file.originalFilename!);
            const articleText = await this.getPdfText(file.filepath);
            const articleTextSummary = this.getPdfTextSummary(articleText);

            const articleId = await this.writeArticleToDb(articleFileName, articleStorageUUID, articleTextSummary);
            await this.saveArticleToStorage(articleStorageUUID, file.filepath);

            return articleId;
        } catch (err) {
            //Ensure atomicity
            //Undo all the changes made to the db and storage
            await this.deleteArticleFromDb(articleStorageUUID);
            await this.deleteArticleFromStorage(articleStorageUUID);

            throw err;
        }
    }
}