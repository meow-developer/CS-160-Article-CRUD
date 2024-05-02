import { Article } from '../repo/article.js';
import ArticleDb from '../repo/articleDb.js';
import ArticleStorage from '../repo/articleStorage.js';
import UserArticleDb from '../repo/userArticleDb.js';

export default class ArticleDeleteService {
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private articleStorage: ArticleStorage = ArticleStorage.getInstance();
    private userArticleDb: UserArticleDb = UserArticleDb.getInstance();
    private articleId: Article["ArticleID"];
    private article: Article | undefined;

    constructor(articleId: number){
        this.articleId = articleId;
    }

    private async getUserArticleFromDb(userId: string){
        return await this.userArticleDb.getUserArticle(this.articleId, userId);
    }

    private async loadArticleFromDb() {
        const article = await this.articleDb.getArticleById(this.articleId);
        this.article = article!;
    }

    private async deactivateArticleInDb() {
        this.article!.Active = false;
        await this.articleDb.updateArticle(this.articleId, this.article!);
    }

    private async deleteArticleInStorage() {
        await this.articleStorage.deleteArticle(this.article?.StorageArticleUUID! + ".pdf");
    }
    public async delete(userId: string): Promise<boolean> {
        const validUserId = await this.getUserArticleFromDb(userId);
        if (validUserId) {
            await this.loadArticleFromDb();
            await this.deactivateArticleInDb();
            await this.deleteArticleInStorage();
            return true;
        } else {
            return false;
        }  
    }
}