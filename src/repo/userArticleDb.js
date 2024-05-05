// @ts-nocheck
import { Prisma } from '@prisma/client'
import prismaClient from './db.js';
import { connect } from 'http2';

class UserArticleDb {
    /**
     * @type {UserArticleDb}
     */
    static instance;
    db = prismaClient;

    constructor() {
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserArticleDb();
        }
        return this.instance;
    }

    /**
     * @param {{ ArticleID?: number; UserUUID: import('crypto').UUID | string; }} UserArticleData
     */
    async insertUserArticle(UserArticleData) {
        const UserArticleCreate = await this.db.userArticle.create({
            "data": {
                "Articles": { connect: {ArticleID:  UserArticleData.ArticleID}},
                "Users": {connect: {UserUUID: UserArticleData.UserUUID}}
            }
        })
        return UserArticleCreate.ArticleId;
    }

    /**
     * @param {string} userUUID
     * @param {number} limit
     * @returns {Promise<number[]>}
     */
    async getArticleIdsByUserUUID(userUUID, limit) {
        const userArticles = await this.db.userArticle.findMany({
            where: {
                UserUUID: userUUID
            },
            select: {
                ArticleId: true
            },
            take: limit
        });
        return userArticles.map(userArticle => userArticle.ArticleId);
    }

    /**
     * @param {number | undefined} articleId
     * @param {string} userId
     */
    async getUserArticle(articleId, userId) {
        const user = await this.db.userArticle.findUnique({
            where: {
                ArticleId_UserUUID: {
                    ArticleId: articleId,
                    UserUUID: userId
                }
            }
        });
        return user;
    }

    /**
     * @param {number | undefined} articleId
     * @param {string} userId
     */
    async countUserArticlesId(articleId, userId) {
        return await this.db.userArticle.count({
            where: {
                ArticleId: articleId,
                UserUUID: userId
            }
        })
    }
}
export default UserArticleDb;