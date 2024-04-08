import ArticleDb from "../../src/repo/articleDb.js";
import crypto from 'crypto';

describe('Article Database', () => {

    const articleDb = ArticleDb.getInstance();

    test("Insert an Article", async () => {
        
        const article = {
            title: "Test Article",
            storageArticleUUID: crypto.randomUUID(),
            active: true
        };
        await articleDb.insertArticle(article);
    });


    test("Get an Article", async () => {
        const ARTICLE_ID = 1;

        const article = await articleDb.getArticleById(ARTICLE_ID);
        console.log(article);
    });

    test("Delete Article by Article ID", async () => {

        const ARTICLE_ID = 1;
        await articleDb.deleteArticleById(ARTICLE_ID);
    });

    
});