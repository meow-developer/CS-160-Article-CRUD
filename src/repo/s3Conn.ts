import { S3Client } from "@aws-sdk/client-s3";
import AWS from "aws-sdk";
import 'dotenv/config';
import S3ConnException from './exception/s3ConnException.js';

export default class AwsS3Conn {
    private static instance: AwsS3Conn;
    private awsAcConfig: AWS.ConfigurationOptions = {};
    private awsBucketRegion: string = "";
    private s3Client: S3Client | null = null;

    private constructor(){
        this.envLoadAwsAcConfig();
        this.loadEnvBucketConfig();
        this.initS3Client();
    }

    public static getInstance(): AwsS3Conn {
        if (!AwsS3Conn.instance) {
            AwsS3Conn.instance = new AwsS3Conn();
        }

        return AwsS3Conn.instance;
    }

    private envLoadAwsAcConfig() {
        const ENV_KEY = "NODE_ENV";
        const DEVELOPMENT_ENV = "development";

        // Only load AWS config in development environment
        if (process.env[ENV_KEY] !== DEVELOPMENT_ENV) {
            return;
        }

        this.loadEnvAwsAcConfig();
        this.updateAwsAcConfig();
    }

    private loadEnvAwsAcConfig() {
        const AC_REGION_ENV_KEY = "AWS_REGION";
        const AC_ACCESS_KEY_ID_ENV_KEY = "AWS_ACCESS_KEY_ID";
        const AC_SECRET_ACCESS_KEY_ENV_KEY = "AWS_SECRET_ACCESS_KEY";

        if (!process.env[AC_REGION_ENV_KEY] || !process.env[AC_ACCESS_KEY_ID_ENV_KEY] || !process.env[AC_SECRET_ACCESS_KEY_ENV_KEY]) {
            throw new Error("Missing AWS environment variables");
        }

        this.awsAcConfig = {
            region: process.env[AC_REGION_ENV_KEY],
            accessKeyId: process.env[AC_ACCESS_KEY_ID_ENV_KEY],
            secretAccessKey: process.env[AC_SECRET_ACCESS_KEY_ENV_KEY]
        };
    }

    private updateAwsAcConfig() {
        AWS.config.update(this.awsAcConfig);
    }

    private loadEnvBucketConfig() {
        const BUCKET_REGION_ENV_KEY = "AWS_BUCKET_REGION";

        if (!process.env[BUCKET_REGION_ENV_KEY]) {
            throw new Error("Missing AWS bucket environment variables");
        }

        this.awsBucketRegion = process.env[BUCKET_REGION_ENV_KEY];

    }

    private initS3Client() {
        this.s3Client = new S3Client({
            region: this.awsBucketRegion
        });
    }

    public getS3Client(): S3Client {
        return this.s3Client!;
    }
}
