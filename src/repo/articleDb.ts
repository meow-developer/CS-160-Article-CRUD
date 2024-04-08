import { Article } from './article.js';
import { Prisma, PrismaClient } from '@prisma/client'

export default class ArticleDb {
    private static instance: ArticleDb;
    private db = new PrismaClient();

    private constructor() {

    }

    public static getInstance() {
        if (!ArticleDb.instance) {
            ArticleDb.instance = new ArticleDb();
        }
        return ArticleDb.instance;
    }

    public async insertArticle(article: Article) {
        await this.db.articles.create({
            "data": {
                "Title": article.Title,
                "StorageArticleUUID": article.StorageArticleUUID,
                "Active": article.Active
            }
        })
    }

    public async updateArticle(articleId: Article["ArticleID"], article: Article) {
        await this.db.articles.update({
            "where": {
                "ArticleID": articleId
            },
            "data": {
                "Title": article.Title,
                "StorageArticleUUID": article.StorageArticleUUID,
                "Active": article.Active
            }
        })
    }
    public async getArticleById(articleId: Article["ArticleID"]) {
        return await this.db.articles.findUnique({
            "where": {
                "ArticleID": articleId
            }
        })
    }
    public async countArticleByStorageUUID(storageArticleUUID: Article["StorageArticleUUID"]) {
        return await this.db.articles.count({
            "where": {
                "StorageArticleUUID": storageArticleUUID
            }
        })
    }

    public async countArticleByArticleId(articleId: Article["ArticleID"]) {
        return await this.db.articles.count({
            "where": {
                "ArticleID": articleId
            }
        })
    }

    public async deleteArticleById(articleId: Article["ArticleID"]) {
        await this.db.articles.delete({
            "where": {
                "ArticleID": articleId
            }
        })
    }
    public async deleteArticleByStorageUUID(storageArticleUUID: Article["StorageArticleUUID"]) {
        await this.db.articles.delete({
            "where": {
                "StorageArticleUUID": storageArticleUUID
            }
        })
    }
}