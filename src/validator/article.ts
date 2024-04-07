import { FileFilterCallback } from 'multer';
import { Request } from 'express';
import TextTokenCounterService from '../service/countTextToken.js';
import fs from 'fs/promises'
import crypto from 'crypto';
import { PathLike } from 'fs';
import { readPdfText } from 'pdf-text-reader';


class ArticleFileValidateFailError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class ArticleFileValidator {
    ARTICLE_TOKEN_LIMIT = 3500;
    constructor() {

    }

    private generateUUIDFileName(): string {
        return crypto.randomUUID();
    }

    private async saveArticleFileToDisk(file: Express.Multer.File) {
        const FOLDER_PATH = "./uploads_temp";
        const filePath = FOLDER_PATH + this.generateUUIDFileName();

        try {
            await fs.writeFile(filePath, file.buffer);
            return filePath;
        } catch (err) {
            console.error(err);
            throw new Error("Error saving file to disk");
        }
    }

    private async getArticlePdfText(filePath: PathLike): Promise<string> {
        try {
            return await readPdfText({ filePath: <string>filePath });
        } catch (err) {
            console.error(err);
            throw new Error("Error reading pdf text");
        }
    }

    private async deleteArticleFileFromDisk(filePath: PathLike): Promise<void> {
        try {
            await fs.unlink(filePath);
        } catch (err) {
            console.error(err);
            throw new Error("Error deleting file from disk");
        }
    }

    private checkFileExtension(file: Express.Multer.File) {
        const allowedExtensions = ["pdf"];

        if (!allowedExtensions.includes(file.mimetype)) {
            throw new ArticleFileValidateFailError("Invalid file extension");
        }

    }

    private checkFileToken(articleText: string): void {
        const textTokenCounterService = new TextTokenCounterService(articleText);
        const articleToken = textTokenCounterService.countTokens();

        if (articleToken > this.ARTICLE_TOKEN_LIMIT) {
            throw new ArticleFileValidateFailError("Article token limit exceeded");
        }

    }

    public fileFilter(req: Request, file: Express.Multer.File, cb: FileFilterCallback): void {
        let filePath: PathLike = "";

        this.saveArticleFileToDisk(file)
            .then(path => {
                filePath = path;
                return this.getArticlePdfText(filePath);
            })
            .then(articlePdfText => {
                this.checkFileExtension(file);
                this.checkFileToken(articlePdfText);
                cb(null, true);
            })
            .catch(err => {
                if (err instanceof ArticleFileValidateFailError) {
                    cb(err);
                } else {
                    cb(new Error("Internal server error"));
                }
            })
            .finally(() => {
                this.deleteArticleFileFromDisk(filePath)
                    .catch(err => console.error(err));
            });
    }
}