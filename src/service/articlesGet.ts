import { Article } from '../repo/article.js';
import ArticleDb from '../repo/articleDb.js';
import { Prisma } from '@prisma/client'

export default class ArticlesGetService{
    private articleDb: ArticleDb = ArticleDb.getInstance();
    
    private async getArticlesFromDb(limit: number){
        return await this.articleDb.getArticles(limit);
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

    public async get(limit: number){
        const articles = await this.getArticlesFromDb(limit);
        return this.filterArticles(articles);
    }
}