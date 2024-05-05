import { Request, Response, NextFunction } from 'express';
import TextTokenCounterService from '../../service/countTextToken.js';
import { readPdfText } from 'pdf-text-reader';
import { OwnValidator } from './ownValidator.js';
import formidable, { EmitData } from 'formidable';
import IncomingForm from 'formidable/Formidable.js';
import fs from 'fs';

export default class ArticleFileValidator extends OwnValidator {
    private ARTICLE_TOKEN_LIMIT = 3500;
    private multipartForm: [formidable.Fields<string>, formidable.Files<string>] | null = null;
    private FORM_FILE_FIELD = "pdf";
    private TEMP_UPLOAD_DIR = "./temp_uploads";
    private MAX_ACCEPT_FILE_SIZE = 30 * 1024 * 1024; // 30MB
    private form: IncomingForm | null = null;
    private uploadPdfFile: formidable.File | null = null;

    constructor() {
        super();
        this.initUploadDir();
        this.initFormidable();
    }

    private async getArticlePdfText(): Promise<string> {
        try {
            return await readPdfText({ filePath: this.uploadPdfFile!.filepath });
        } catch (err) {
            console.error(err);
            throw new Error("Error reading pdf text");
        }
    }


    private checkFileToken(articleText: string): boolean {
        const textTokenCounterService = new TextTokenCounterService(articleText);
        const articleToken = textTokenCounterService.countTokens();

        if (articleToken > this.ARTICLE_TOKEN_LIMIT) {
            this.addFailStep(this.checkFileToken.name, "Article token length exceeded", 400);
            return false;
        } else {
            this.addPassResult(this.checkFileToken.name);
            return true;
        }
    }

    private initUploadDir(): void {
        if (!fs.existsSync(this.TEMP_UPLOAD_DIR)) {
            fs.mkdirSync(this.TEMP_UPLOAD_DIR);
        }
    }

    private async getFormEnd(): Promise<void> {
        return new Promise((resolve) => {
            this.form!.once("end", () => {
                console.log("Form end");
                resolve();
            });
        });
    }

    private async deleteFileWhenReqEnd(req: Request): Promise<void> {
        req.on("close", () => {
            fs.unlinkSync(this.uploadPdfFile!.filepath);
        })
    }

    private initFormidable(): void {
        this.form = formidable({
            uploadDir: this.TEMP_UPLOAD_DIR,
            maxFileSize: this.MAX_ACCEPT_FILE_SIZE, // 30MB
            maxFiles: 1,
            encoding: "utf-8"
        });
    }

    private async loadMultipartForm(req: Request): Promise<void> {
        return new Promise((resolve, reject) => {
            this.form!.parse(req, (err, fields, files) => {
                if (err) {
                    reject(err);
                }
                this.multipartForm = [fields, files];
                resolve();
            })
        })
    }

    private loadUploadFile(): void {
        this.uploadPdfFile = this.multipartForm![1][this.FORM_FILE_FIELD]![0];
    }


    private async checkArticleFileExists(req: Request) {
        const formField = this.multipartForm![1][this.FORM_FILE_FIELD];

        if (formField! && !formField![0]) {
            this.addFailStep(this.checkArticleFileExists.name, "No pdf file found in the request", 400);
        }

        this.addPassResult(this.checkArticleFileExists.name, `File ${formField![0].originalFilename} found in the request`);
    }

    private checkMimeType(req: Request) {
        if (this.uploadPdfFile!.mimetype !== "application/pdf") {
            this.addFailStep(this.checkMimeType.name, "Invalid file type", 400);
        }
        this.addPassResult(this.checkMimeType.name);
    }
    private addPdfToRequest(req: Request): void {
        req.ownValidation!.validatedData["pdf"] = this.uploadPdfFile;
    }

    public async validate(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log("Validating article file");
        await this.loadMultipartForm(req);
        this.checkArticleFileExists(req)

        this.loadUploadFile();
        this.checkMimeType(req)
        const articleText = await this.getArticlePdfText();
        this.checkFileToken(articleText);

        this.addPdfToRequest(req);
        this.deleteFileWhenReqEnd(req);
        next();
        // await this.deleteUploadFile();
        console.log("Article file validated")
    }
}

