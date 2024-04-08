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

        throw new ArticleCreateError("Failed to generate UUID");
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

    public async save(file: Express.Multer.File){
        const articleStorageUUID = await this.safeUUIDGeneration();
        try {

            await this.writeArticleToDb(file.originalname, articleStorageUUID);
            await this.saveArticleToStorage(articleStorageUUID, file.path);

        } catch (err) {
            //Ensure atomicity
            //Undo all the changes made to the db and storage
            await this.deleteArticleFromDb(articleStorageUUID);
            await this.deleteArticleFromStorage(articleStorageUUID);

            throw err;
        }
    }
}