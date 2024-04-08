//@ts-nocheck
import ArticleCreateService from "../../src/service/articleCreate";
import path from "path";
import { createReadStream } from "fs";
import crypto from "crypto";
jest.useFakeTimers();

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

    test("Write Article to DB", async ()=> {
        const articleFileName = "Test Article";
        const articleStorageUUID = crypto.randomUUID();

        expect(async ()=> {
            await articleCreateService.writeArticleToDb(articleFileName, articleStorageUUID);
        }).not.toThrow();
    })


    
})