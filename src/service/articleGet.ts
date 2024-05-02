import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';
import ArticleStorage from '../repo/articleStorage.js';
import UserArticleDb from '../repo/userArticleDb.js';
import { open, unlink } from 'fs/promises';
import path from 'path';
import { existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { Request } from 'express';

export default class ArticleGetService {
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private articleStorage: ArticleStorage = ArticleStorage.getInstance();
    private userArticleDb: UserArticleDb = UserArticleDb.getInstance();
    private article: Article | undefined;
    private articlePath: string | undefined;
    private articleId: number;
    private tempStoragePath: string;
    private req: Request;

    constructor(articleId: number, req: Request){
        this.articleId = articleId;
        this.req = req;
        this.tempStoragePath = this.getTempStoragePath();
        this.initTempStorage();
        
    }

    private async getUserArticleFromDb(userId: string){
        return await this.userArticleDb.getUserArticle(this.articleId, userId);
    }

    private async loadArticleFromDb() {
        const article = await this.articleDb.getArticleById(this.articleId);

        this.article = article!;
    }

    private async loadArticleStorageFilePath() {
        const articleOriginalFileName = this.article?.Title;
        this.articlePath = path.join(this.tempStoragePath, articleOriginalFileName! + ".pdf");
    }

    private async getArticleStreamFromStorage(): Promise<ReadableStream> {
        return await this.articleStorage.getArticle(this.article?.StorageArticleUUID! + ".pdf");
    }

    private initTempStorage() {
        if (!existsSync(this.tempStoragePath)) {
            mkdirSync(this.tempStoragePath);
        }
    }

    private getTempStoragePath() {
        const currentFilePath = fileURLToPath(import.meta.url);
        const currentFolder = path.dirname(currentFilePath);
        const tempStoragePath = path.resolve(currentFolder, '../../temp_files');
        return tempStoragePath;
    }

    private async saveArticleToDisk(articleStream: ReadableStream): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                const reader = articleStream.getReader();
                const file = await open(this.articlePath!, 'w');
                const writer = file.createWriteStream();
    
                let read = await reader.read();
                while (!read.done) {
                    writer.write(read.value);
                    read = await reader.read(); // Continue reading from the stream
                }
                writer.end();
                resolve();
            } catch (err) {
                reject(err);
            }

        });
    }

    private deleteArticleFromDisk() {
        this.req.on('close', async () => {
            await unlink(this.articlePath!);
        })
    }


    public async get(userId: string): Promise<string>{
        const validUserId = await this.getUserArticleFromDb(userId);
        if (validUserId) {
            await this.loadArticleFromDb();
            this.loadArticleStorageFilePath();

            const articleStream = await this.getArticleStreamFromStorage();
            await this.saveArticleToDisk(articleStream)

            this.deleteArticleFromDisk();
        }
        return this.articlePath!;
    }
    
}