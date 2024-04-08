import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';
import { UUID } from 'crypto';
import ArticleStorage from '../repo/articleStorage.js';
import { ReadableStream } from 'stream/web';
import { open, unlink } from 'fs/promises';
import { PathLike } from 'fs';

export class ArticleGetError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}


export default class ArticleGetService {
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private articleStorage: ArticleStorage = ArticleStorage.getInstance();
    private articleStorageUUID: UUID | undefined;
    private articlePath: PathLike | undefined;
    private articleId: string;

    constructor(articleId: string){
        this.articleId = articleId;
    }
    
    private async checkArticleExist() {
        const articleCount = await this.articleDb.countArticleByArticleId(this.articleId);
        const isArticleExist = articleCount > 0;

        if (!isArticleExist) {
            throw new ArticleGetError("Article not found", 404);
        }
    }

    private async getArticleStorageUUIDFromDb(): Promise<UUID> {
        const article = await this.articleDb.getArticle(this.articleId);
        return crypto.randomUUID();
    }

    private async loadArticleStorageUUIDPath() {
        const articleStorageUUID = await this.getArticleStorageUUIDFromDb();
        this.articleStorageUUID = articleStorageUUID;
        this.articlePath = articleStorageUUID + ".pdf";
    }

    private async getArticleStreamFromStorage(): Promise<any> {
        return await this.articleStorage.getArticle(this.articleStorageUUID!);
    }


    private async saveArticleToDisk(articleStream: ReadableStream) {
        const reader = articleStream.getReader();
        const read = await reader.read();

        const file = await open(this.articlePath!, 'w');
        const writer = file.createWriteStream();

        while (!read.done) {
            writer.write(read.value);
        }
        writer.end();
    }

    public async deleteArticleFromDisk() {
        await unlink(this.articlePath!);
    }

    public async getArticle(articleId: string): Promise<PathLike>{
        await this.checkArticleExist();
        await this.loadArticleStorageUUIDPath();
        const articleStream = await this.getArticleStreamFromStorage();
        await this.saveArticleToDisk(articleStream)

        return this.articlePath!;
    }
    
}