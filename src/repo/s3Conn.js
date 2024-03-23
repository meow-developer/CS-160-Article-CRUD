import { S3Client } from "@aws-sdk/client-s3";
import AWS from "aws-sdk";
import 'dotenv/config';

export class AwsS3Conn {
    #awsAcConfig;
    #awsBucketName;
    #awsBucketRegion;
    #s3Client;

    constructor() {
        this.#envLoadAwsAcConfig();
        this.#loadEnvBucketConfig();
        this.#initS3Client();
        return this.#s3Client;
    }

    #envLoadAwsAcConfig() {
        const ENV_KEY = "NODE_ENV";
        const DEVELOPMENT_ENV = "development";

        // Only load AWS config in development environment
        if (process.env[ENV_KEY] !== DEVELOPMENT_ENV) {
            return;
        }

        this.#loadEnvAwsAcConfig();
        this.#updateAwsAcConfig();
    }

    #loadEnvAwsAcConfig() {
        const AC_REGION_ENV_KEY = "AWS_REGION";
        const AC_ACCESS_KEY_ID_ENV_KEY = "AWS_ACCESS_KEY_ID";
        const AC_SECRET_ACCESS_KEY_ENV_KEY = "AWS_SECRET_ACCESS_KEY";

        if (!process.env[AC_REGION_ENV_KEY] || !process.env[AC_ACCESS_KEY_ID_ENV_KEY] || !process.env[AC_SECRET_ACCESS_KEY_ENV_KEY]) {
            throw new Error("Missing AWS environment variables");
        }

        this.#awsAcConfig = {
            region: process.env[AC_REGION_ENV_KEY],
            accessKeyId: process.env[AC_ACCESS_KEY_ID_ENV_KEY],
            secretAccessKey: process.env[AC_SECRET_ACCESS_KEY_ENV_KEY]
        };
    }

    #updateAwsAcConfig() {
        AWS.config.update(this.#awsAcConfig);
    }

    #loadEnvBucketConfig() {
        const BUCKET_NAME_ENV_KEY = "AWS_BUCKET_NAME";
        const BUCKET_REGION_ENV_KEY = "AWS_BUCKET_REGION";

        if (!process.env[BUCKET_NAME_ENV_KEY] || !process.env[BUCKET_REGION_ENV_KEY]) {
            throw new Error("Missing AWS bucket environment variables");
        }

        this.#awsBucketName = process.env[BUCKET_NAME_ENV_KEY];
        this.#awsBucketRegion = process.env[BUCKET_REGION_ENV_KEY];

    }

    #initS3Client() {

        this.#s3Client = new S3Client({
            region: this.#awsBucketRegion
        });
    }
}
