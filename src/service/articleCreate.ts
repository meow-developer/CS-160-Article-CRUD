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

    private async checkUUIDDbCollision(uuid: string) {
        const articleCount = await this.articleDb.countArticleByStorageUUID(uuid);
        const isUUIDCollision = articleCount > 0;
        
        if(isUUIDCollision){
            throw new ArticleCreateError("UUID collision");
        }
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
            articleStorageUUID,
            articleFilePath
        )
    }

    public async save(file: Express.Multer.File){
        const articleStorageUUID = this.generateUUIDForArticleStore();
        try {
            const isUUIDCollision = await this.checkUUIDDbCollision(articleStorageUUID);

            await this.writeArticleToDb(file.originalname, articleStorageUUID);
            await this.saveArticleToStorage(articleStorageUUID, file.path);
        } catch (err) {
            //Ensure atomicity
            //Undo all the changes made to the db and storage
            this.deleteArticleFromDb(articleStorageUUID);
            this.deleteArticleFromStorage(articleStorageUUID);

            throw err;
        }
    }
}