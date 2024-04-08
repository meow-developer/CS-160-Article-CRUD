import ArticleCreateService from "../../src/service/articleCreate";
import path from "path";
import { createReadStream } from "fs";

jest.useFakeTimers();

describe("Article Create Service", ()=>{

    test("Save article", async()=>{
        const SAMPLE_PDF_FILE_PATH = path.resolve(__dirname, "../resources/sample.pdf");

        const file: Express.Multer.File = {
            "path": SAMPLE_PDF_FILE_PATH,
            "originalname": "sample.pdf",
            "fieldname": "pdf",
            "mimetype": "application/pdf",
            "size": 1000,
            "destination": "",
            "buffer": Buffer.from(""),
            "filename": "sample.pdf",
            "stream": createReadStream(SAMPLE_PDF_FILE_PATH),
            "encoding": "utf-8"
        }

        const articleCreateService = new ArticleCreateService();
        await articleCreateService.save(file);
    }, 10000);
})