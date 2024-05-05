import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';
import ArticleStorage from '../repo/articleStorage.js';
import UserArticleDb from '../repo/userArticleDb.js';
import { open, unlink } from 'fs/promises';
import path from 'path';
import DiskStorage from '../repo/diskStorage.js';
import { Request } from 'express';

export default class ArticleGetService {
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private articleStorage: ArticleStorage = ArticleStorage.getInstance();
    private userArticleDb: UserArticleDb = UserArticleDb.getInstance();
    private diskStorage: DiskStorage = DiskStorage.getInstance();

    private articleId: number;
    private req: Request;

    constructor(articleId: number, req: Request){
        this.articleId = articleId;
        this.req = req;
        
    }

    private async getArticleFromDb() {
        const article = await this.articleDb.getArticleById(this.articleId);

        return article!;
    }


    private async getArticleStreamFromStorage(storageArticleUUID: string): Promise<Uint8Array> {
        return await this.articleStorage.getArticle(storageArticleUUID + ".pdf");
    }

    private async saveArticleToDisk(articleStorageUUID: string, articleUnitArray: Uint8Array): Promise<string> {
        const filePath = await this.diskStorage.saveByteArrayToDisk(articleStorageUUID, articleUnitArray);
        return filePath;
    }

    private deleteArticleFromDisk(filePath: string) {
        this.req.on('close', async () => {
            this.diskStorage.deleteFileByFilePath(filePath);
        })
    }


    public async get(userId: string): Promise<string>{
        const article = await this.getArticleFromDb();

        const articleUnitArray = await this.getArticleStreamFromStorage(article.StorageArticleUUID);
        const filePath = await this.saveArticleToDisk(article?.StorageArticleUUID, articleUnitArray)

        this.deleteArticleFromDisk(filePath);
        return filePath;
        
    }
}