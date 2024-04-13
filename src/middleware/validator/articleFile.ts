import { FileFilterCallback } from 'multer';
import { NextFunction, Request, Response } from 'express';
import TextTokenCounterService from '../../service/countTextToken.js';
import { readPdfText } from 'pdf-text-reader';
import { CustomRequest, OwnValidator } from './ownValidator.js';
import ValidationRestError from './ValidationRestError.js';
import formidable from 'formidable';

export default class ArticleFileValidator extends OwnValidator{
    private ARTICLE_TOKEN_LIMIT = 3500;
    private multipartForm: [formidable.Fields<string>, formidable.Files<string>] | undefined;
    private FORM_FILE_FIELD = "pdf";

    constructor() {
        super();
    }

    private async getArticlePdfText(filePath: string): Promise<string> {
        try {
            console.log(filePath)
            return await readPdfText({ filePath: filePath });
        } catch (err) {
            console.error(err);
            throw new Error("Error reading pdf text");
        }
    }
    
    
    private checkFileToken(articleText: string): boolean {
        const textTokenCounterService = new TextTokenCounterService(articleText);
        const articleToken = textTokenCounterService.countTokens();
    
        if (articleToken > this.ARTICLE_TOKEN_LIMIT) {
            this.addFailResult(this.checkFileToken.name, "Article token length exceeded", 400);
            return false;
        } else {
            this.addPassResult(this.checkFileToken.name);
            return true;
        }
    }

    private async loadMultipartForm(req: Request){
        const form = new formidable.IncomingForm();
        this.multipartForm =  await form.parse(req);
    }

    private async checkArticleFileExists (req: Request): Promise<boolean> {
        if (!this.multipartForm![1][this.FORM_FILE_FIELD] && !this.multipartForm![1][this.FORM_FILE_FIELD]![0]) {
            this.addFailResult(this.checkArticleFileExists.name, "No pdf file found in the request", 400);
            return false;
        }
        
        this.addPassResult(this.checkArticleFileExists.name);
        return true;
    }

    private checkMimeType(req: Request): boolean {
        if (this.multipartForm![1][this.FORM_FILE_FIELD]![0].mimetype !== "application/pdf") {
            this.addFailResult(this.checkMimeType.name, "Invalid file type", 400);
            return false;
        }
        this.addPassResult(this.checkMimeType.name);
        return true;
    }

    public async validate(req: CustomRequest, res: Response): Promise<void> {
        await this.loadMultipartForm(req);

        if (!this.checkArticleFileExists(req)) {
            return;
        }

        if (!this.checkMimeType(req)) {
            return;
        }
        const articleText = await this.getArticlePdfText(req.file!.path);
        this.checkFileToken(articleText);
    }
}

