import ArticleDb from '../repo/articleDb.js';
import { Article } from '../repo/article.js';


export default class ArticleMetadataGetService {
    private articleId: number;
    constructor(articleId: number) {
        this.articleId = articleId;
    }
    private async getArticleDataFromDb() {
        const articleDb = ArticleDb.getInstance();
        return (await articleDb.getArticleById(this.articleId))!
    }
    private async getArticleMetadata(article: Article) {
        return {
            "Title": article.Title,
            "PdfFileSummary": article.PdfFileSummary,
        }
    }
    public async get() {
        const article = await this.getArticleDataFromDb();
        const articleMetadata = await this.getArticleMetadata(article);
        return articleMetadata;
    }
}