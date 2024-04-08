import { FileFilterCallback } from 'multer';
import { Request } from 'express';
import TextTokenCounterService from '../service/countTextToken.js';
import fs from 'fs/promises'
import crypto from 'crypto';
import { PathLike } from 'fs';
import { readPdfText } from 'pdf-text-reader';


export class ArticleFileValidateFailError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export class ArticleFileValidator {
    ARTICLE_TOKEN_LIMIT = 3500;
    constructor() {

    }

    private checkFileExtension(file: Express.Multer.File) {
        const allowedExtensions = ["application/pdf"];

        if (!allowedExtensions.includes(file.mimetype)) {
            throw new ArticleFileValidateFailError("Invalid file extension");
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


    private checkFileToken(articleText: string): void {
        const textTokenCounterService = new TextTokenCounterService(articleText);
        const articleToken = textTokenCounterService.countTokens();

        if (articleToken > this.ARTICLE_TOKEN_LIMIT) {
            throw new ArticleFileValidateFailError("Article token limit exceeded");
        }

    }

    public fileFilter(req: Request, file: Express.Multer.File, cb: FileFilterCallback): void {
        
        this.checkFileExtension(file);
        this.getArticlePdfText(file.path).then((articleText) => {
            this.checkFileToken(articleText);
            cb(null, true);
        }).catch((err) => {
            if (err instanceof ArticleFileValidateFailError) {
                cb(err);
            } else {
                cb(new Error("Internal server error handling pdf file upload"));
            }
        });
    }
}