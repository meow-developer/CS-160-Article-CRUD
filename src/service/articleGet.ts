import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';
import ArticleStorage from '../repo/articleStorage.js';
import { open, unlink } from 'fs/promises';
import { PathLike } from 'fs';
import { ServiceRestError } from './ServiceRestError.js';

export default class ArticleGetService {
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private articleStorage: ArticleStorage = ArticleStorage.getInstance();
    private article: Article | undefined;
    private articlePath: string | undefined;
    private articleId: number;

    constructor(articleId: number){
        this.articleId = articleId;
    }

    private async loadArticleFromDb() {
        const article = await this.articleDb.getArticleById(this.articleId);

        this.article = article!;
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

    public async get(): Promise<string>{
        await this.loadArticleFromDb();
        this.loadArticleStorageFilePath();

        const articleStream = await this.getArticleStreamFromStorage();
        await this.saveArticleToDisk(articleStream)

        return this.articlePath!;
    }
    
}