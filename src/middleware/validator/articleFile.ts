import { FileFilterCallback } from 'multer';
import { NextFunction, Request, Response } from 'express';
import TextTokenCounterService from '../../service/countTextToken.js';
import { PathLike } from 'fs';
import { readPdfText } from 'pdf-text-reader';
import ValidationRestError from './ValidationRestError.js'


export class ArticleFileValidator {
    private ARTICLE_TOKEN_LIMIT = 3500;

    private checkFileMimeType (file: Express.Multer.File) {
        const allowedMimeType = "application/pdf";

        if (allowedMimeType !== file.mimetype) {
            throw new ValidationRestError("Invalid file extension");
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
            throw new ValidationRestError("Article token limit exceeded", 413, "PDF File has too many tokens");
        }

    }

    public fileFilter(req: Request, file: Express.Multer.File, cb: FileFilterCallback): void {
        
        this.checkFileMimeType(file);
        this.getArticlePdfText(file.path).then((articleText) => {
            this.checkFileToken(articleText);
            cb(null, true);
        }).catch((err) => {
            if (err instanceof ValidationRestError) {
                cb(err);
            } else {
                cb(new Error("Internal server error handling pdf file upload"));
            }
        });
    }
}

export const checkUploadFileExist = (req: Request, res: Response, next: NextFunction) => {
    if (!req.file || req.files?.length === 0) {
        throw new ValidationRestError("No article file provided");
    }
    next();
}