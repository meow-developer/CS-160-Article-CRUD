import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';
import { UUID } from 'crypto';
import ArticleStorage from '../repo/articleStorage.js';
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
    private article: Article | undefined;
    private articlePath: PathLike | undefined;
    private articleId: number;

    constructor(articleId: number){
        this.articleId = articleId;
    }
    
    private async checkArticleExist() {
        const articleCount = await this.articleDb.countArticleByArticleId(this.articleId);
        const isArticleExist = articleCount > 0;

        if (!isArticleExist) {
            throw new ArticleGetError("Article not found", 404);
        }
    }

    private async loadArticleFromDb() {
        const article = await this.articleDb.getArticleById(this.articleId);

        if (!article) {
            throw new Error("Article not found in db");
        }

        this.article = article;
    }

    private async loadArticleStorageFilePath() {
        const articleOriginalFileName = this.article?.Title;
        this.articlePath = articleOriginalFileName + ".pdf";
    }

    private async getArticleStreamFromStorage(): Promise<ReadableStream> {
        return await this.articleStorage.getArticle(this.article?.StorageArticleUUID!);
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

    public async getArticle(): Promise<PathLike>{
        await this.checkArticleExist();
        await this.loadArticleFromDb();
        this.loadArticleStorageFilePath();

        const articleStream = await this.getArticleStreamFromStorage();
        await this.saveArticleToDisk(articleStream)

        return this.articlePath!;
    }
    
}