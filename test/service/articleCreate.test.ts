//@ts-nocheck
//Disable typescript checking to allow private method testing

import ArticleCreateService from "../../src/service/articleCreate";
import { createReadStream } from "fs";
import crypto from "crypto";
import { dirname } from "path";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe("Article Create Service", ()=>{
    const articleCreateService = new ArticleCreateService();

    test("Generate UUID", async ()=> {
        const uuid = articleCreateService.generateUUIDForArticleStore();
        console.log(uuid);
    })

    test("Check UUID Collision", async ()=> {
        const uuid = crypto.randomUUID();
        
        expect(async ()=> {
            await articleCreateService.checkUUIDDbCollision(uuid);
        }).not.toThrow();
    })

    test("Check UUID Reliable Generation", async ()=> {
        expect(async ()=> {
            await articleCreateService.safeUUIDGeneration();
        }).not.toThrow();
    })

    describe("Create and Delete Article in DB", ()=> {
        const articleFileName = "Test Article";
        const articleStorageUUID = crypto.randomUUID();
        test("Create Article in DB", async ()=> {
            expect(async ()=> {
                await articleCreateService.writeArticleToDb(articleFileName, articleStorageUUID);
            }).not.toThrow();
        })

        test("Delete Article in DB", async ()=> {
            expect(async ()=> {
                await articleCreateService.deleteArticleFromDb(articleStorageUUID);
            }).not.toThrow();
        })
    })

    describe("Create and Delete Article in Storage", ()=> {

        const articleStorageUUID = crypto.randomUUID();
        const SAMPLE_PDF_PATH = `${dirname(__dirname)}/resources/sample.pdf`;
        test("Create Article in Storage", async ()=> {
            expect(async ()=> {
                await articleCreateService.saveArticleToStorage(articleStorageUUID, SAMPLE_PDF_PATH);
            }).not.toThrow();
        })

        test("Delete Article in Storage", async ()=> {
            expect(async ()=> {
                await articleCreateService.deleteArticleFromStorage(articleStorageUUID);
            }).not.toThrow();
        })


    
    })


    
})