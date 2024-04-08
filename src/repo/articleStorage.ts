import { open } from 'node:fs/promises';
import { ReadStream } from "fs";
import AwsS3Conn from "./s3Conn.js";
import { S3Client, GetObjectCommand, DeleteObjectCommand, PutObjectCommand, S3ServiceException } from "@aws-sdk/client-s3";
import { PathLike } from 'node:fs';

export default class ArticleStorage {
    public static instance: ArticleStorage;
    private bucketName: string = "";
    private s3Client: S3Client;

    private constructor() {
        this.loadEnvBucketName();
        const awsS3Conn = AwsS3Conn.getInstance();
        this.s3Client = awsS3Conn.getS3Client();
    }

    public static getInstance(): ArticleStorage {
        if (!this.instance) {
            this.instance = new ArticleStorage();
        }
        return this.instance;
    }


    private async articleFileToStream(articlePath: PathLike): Promise<ReadStream> {
        const file = await open(articlePath, 'r');
        return file.createReadStream();
    }

    public async saveArticle(
        articleUUID: string,
        articleFilePath: PathLike
    ) {

        /**
         * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_PutObject_section.html}
         */
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: articleUUID,
            Body: await this.articleFileToStream(articleFilePath)
        });

        await this.s3Client.send(command);

    }

    public async deleteArticle(articleUUID: string) {
        /**
         * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_DeleteObject_section.html}
         */
        const command = new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: articleUUID,
        });

        await this.s3Client.send(command);
    }

    public async getArticle(articleUUID: string): Promise<ReadableStream> {
        /**
         * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_GetObject_section.html}
         */
        const command: GetObjectCommand = new GetObjectCommand({
            Bucket: this.bucketName,
            Key: articleUUID,
        });

        const response = await this.s3Client.send(command);
        const responseStream = await response.Body?.transformToWebStream();
        return responseStream!;

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