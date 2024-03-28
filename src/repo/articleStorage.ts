import { open } from 'node:fs/promises';
import { ReadStream } from "fs";
import AwsS3Conn from "./s3Conn.js";
import { S3Client, GetObjectCommand, DeleteObjectCommand, PutObjectCommand, S3ServiceException } from "@aws-sdk/client-s3";
import { PathLike } from 'node:fs';

export default class ArticleStorage {
    private bucketName: string = "";
    private s3Client: S3Client;

    constructor() {
        this.loadEnvBucketName();
        const awsS3Conn = AwsS3Conn.getInstance();
        this.s3Client = awsS3Conn.getS3Client();
    }

    private async sendCommand(command: GetObjectCommand | DeleteObjectCommand | PutObjectCommand): Promise<void> {
        try {
            await this.s3Client.send(command);
            
        } catch (err) {
            if (err instanceof S3ServiceException) {
                console.error("S3 Error")
            } else {
                console.error("Unknown Error with interacting with S3")
            }
            console.error(err);
            throw err;
        }
    }

    private async articleFileToStream(articlePath: PathLike): Promise<ReadStream> {
        const file = await open(articlePath, 'r');
        return file.createReadStream();
    }

    public async saveArticle(
        articleId: string,
        articleFilePath: PathLike
    ) {

        /**
         * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_PutObject_section.html}
         */
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: articleId,
            Body: await this.articleFileToStream(articleFilePath)
        });

        await this.sendCommand(command);

    }

    public async deleteArticle(articleId: string) {
        /**
         * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_DeleteObject_section.html}
         */
        const command = new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: articleId,
        });

        await this.sendCommand(command);
    }

    public async getArticle(articleId: string) {
        /**
         * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_GetObject_section.html}
         */
        const command = new GetObjectCommand({
            Bucket: this.bucketName,
            Key: articleId,
        });

        await this.sendCommand(command);

    }

    private loadEnvBucketName() {
        const bucketName_ENV_KEY = "AWS_bucketName";

        const envBucketName = process.env[bucketName_ENV_KEY];

        if (!envBucketName) {
            throw new Error("Missing AWS bucket name in environment variables");
        }

        this.bucketName = envBucketName;
    }
}