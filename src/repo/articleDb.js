import MysqlDatabase from './dbConn.js'

export default class ArticleDb {
    static instance;
    #mysqlDb = MysqlDatabase.getInstance();
    #dbPool = this.#mysqlDb.getPool();

    constructor() {

    }

    static getInstance() {
        if (!ArticleDb.instance) {
            ArticleDb.instance = new ArticleDb();
        }
        return ArticleDb.instance;
    }

    async insertArticle(article) {
        let conn;
        try {
            conn = await this.#dbPool.getConnection();
            const query = `INSERT INTO Articles (Title, StorageArticleUUID, Active) VALUES (?, ?, ?)`;
            const [result] = await conn.execute(query, [article.title, article.storageArticleUUID, article.active]);
            return result;

        } catch (error) {
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }

    async updateArticle(articleId, article) {
        let conn;
        try {
            conn = await this.#dbPool.getConnection();
            const query = `UPDATE Articles SET Title = ?, StorageArticleUUID = ?, Active = ? WHERE ArticleId = ?`;
            const [result] = await conn.execute(query, [article.title, article.storageArticleUUID, article.active, articleId]);
            return result;
        } catch (error) {
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }
    async getArticleById(articleId) {
        let conn;
        try {
            conn = await this.#dbPool.getConnection();
            const query = `SELECT * FROM Articles WHERE ArticleId = ?`;
            const [result] = await conn.execute(query, [articleId]);
            return result;
        } catch (error) {
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }
    async countArticleByStorageUUID(storageArticleUUID) {
        let conn;
        try {
            conn = await this.#dbPool.getConnection();
            const query = `SELECT COUNT(*) as count FROM Articles WHERE StorageArticleUUID = ?`;
            const [result] = await conn.execute(query, [storageArticleUUID]);
            return result[0].count;
        } catch (error) {
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }

    async countArticleByArticleId(articleId) {
        let conn;
        try {
            conn = await this.#dbPool.getConnection();
            const query = `SELECT COUNT(*) as count FROM Articles WHERE ArticleId = ?`;
            const [result] = await conn.execute(query, [articleId]);
            return result[0].count;
        } catch (error) {
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }

    async deleteArticleById(articleId) {
        let conn;
        try {
            conn = await this.#dbPool.getConnection();
            const query = `DELETE FROM Articles WHERE ArticleId = ?`;
            const [result] = await conn.execute(query, [articleId]);
            return result;
        } catch (error) {
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }

    async deleteArticleByStorageUUID(storageArticleUUID) {
        let conn;
        try {
            conn = await this.#dbPool.getConnection();
            const query = `DELETE FROM Articles WHERE StorageArticleUUID = ?`;
            const [result] = await conn.execute(query, [storageArticleUUID]);
            return result;
        } catch (error) {
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }
}