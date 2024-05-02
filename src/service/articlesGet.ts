import crypto, { UUID } from 'crypto';
import { Article } from '../repo/article.js';
import ArticleDb from '../repo/articleDb.js';
import { Prisma } from '@prisma/client'
import UserArticleDb from '../repo/userArticleDb.js';

export default class ArticlesGetService{
    private articleDb: ArticleDb = ArticleDb.getInstance();
    private userArticleDb: UserArticleDb = UserArticleDb.getInstance();

    private async getArticleIdFromDb(userUUID: string, limit: number){
        return await this.userArticleDb.getArticleIdsByUserUUID(userUUID, limit);
    }

    private async getArticlesFromDb(articleIds: Array<number>): Promise<Array<Article>> {
        const articles = await Promise.all(articleIds.map(articleId => this.articleDb.getArticleById(articleId)));
        return articles.filter(article => article !== null) as Article[];
    }

    private filterArticles(article: Array<Article>
    ){

       const filteredArticles = article.map((article) => {
           return {
               articleID: article.ArticleID,
               title: article.Title,
               summary: article.PdfFileSummary
           }
       });
         return filteredArticles;
    }

    public async get(userUUID: string, limit: number){
        const articleIds = await this.getArticleIdFromDb(userUUID, limit);
        const articles = await this.getArticlesFromDb(articleIds);
        return this.filterArticles(articles);
    }
}