import AwsS3Conn from "./s3Conn.js";

export default class ArticleStorage {
    #BUCKET_NAME = "article-bucket";
    #s3Client;

    constructor() {
        this.#s3Client = new AwsS3Conn();
    }

    async saveArticle(
        articleId,
        articleFile
    ) {
        const params = {
            Bucket: this.#BUCKET_NAME,
            Key: articleId,
            Body: articleFile,
        };

        await this.#s3Client.upload(params);
    }

    async deleteArticle(articleId) {
        const params = {
            Bucket: this.#BUCKET_NAME,
            Key: articleId,
        };

        await this.#s3Client.delete(params);
    }

    async getArticle(articleId) {
        const params = {
            Bucket: this.#BUCKET_NAME,
            Key: articleId,
        };

        return await this.#s3Client.get(params);
    }
}