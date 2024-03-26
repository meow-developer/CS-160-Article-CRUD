import AwsS3Conn from "./s3Conn.js";
import { S3Client } from "@aws-sdk/client-s3";

export default class ArticleStorage {
    private BUCKET_NAME: string = "article-bucket";
    private s3Client: S3Client;

    constructor() {
        const awsS3Conn = AwsS3Conn.getInstance();
        this.s3Client = awsS3Conn.getS3Client();
    }

    async saveArticle(
        articleId: string,
        articleFile: Buffer
    ) {
        const params = {
            Bucket: this.BUCKET_NAME,
            Key: articleId,
            Body: articleFile,
        };
    }

    async deleteArticle(articleId: string) {
        const params = {
            Bucket: this.BUCKET_NAME,
            Key: articleId,
        };

    }

    async getArticle(articleId: string) {
        const params = {
            Bucket: this.BUCKET_NAME,
            Key: articleId,
        };


    }
}