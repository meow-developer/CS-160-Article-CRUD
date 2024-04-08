import crypto, { UUID } from 'crypto';
import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';
import ArticleStorage from  '../repo/articleStorage.js';

class ArticleCreateError extends Error {
    constructor(message: string){
        super(message);
    }
}

export default class ArticleCreateService {
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private articleStorage: ArticleStorage = ArticleStorage.getInstance();

    private generateUUIDForArticleStore(): UUID {
        console.log("Generating UUID");
        return crypto.randomUUID();
    }

    private async checkUUIDDbCollision(uuid: UUID) {
        console.log("Checking UUID collision")
        const articleCount = await this.articleDb.countArticleByStorageUUID(uuid);
        const isUUIDCollision = articleCount > 0;
        
        if(isUUIDCollision){
            throw new ArticleCreateError("UUID collision");
        }
        console.log("UUID collision check passed")
    }

    private async writeArticleToDb(
        articleFileName: string,
        articleStorageUUID: UUID
    ){
        const article: Article = {
            Title: articleFileName,
            StorageArticleUUID: articleStorageUUID,
            Active: true,
        }
        await this.articleDb.insertArticle(article);
        console.log("Article written to db")
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
            articleStorageUUID,
            articleFilePath
        )
        console.log("Article saved to storage")
    }

    public async save(file: Express.Multer.File){
        const articleStorageUUID = this.generateUUIDForArticleStore();
        try {
            const isUUIDCollision = await this.checkUUIDDbCollision(articleStorageUUID);

            await this.writeArticleToDb(file.originalname, articleStorageUUID);
            await this.saveArticleToStorage(articleStorageUUID, file.path);
        } catch (err) {
            console.log(err)

            //Ensure atomicity
            //Undo all the changes made to the db and storage
            await this.deleteArticleFromDb(articleStorageUUID);
            await this.deleteArticleFromStorage(articleStorageUUID);

            throw err;
        }
    }
}