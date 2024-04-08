import path from 'path';
import ArticleStorage from '../../src/repo/articleStorage';

describe('Article S3 Bucket Storage', () => {

    const articleStorage = ArticleStorage.getInstance();

    test("Save Article to S3 Bucket", async () => {
        const SAMPLE_PDF_FILE_PATH = path.resolve(__dirname, "../resources/sample.pdf");

        await articleStorage.saveArticle("sample.pdf", SAMPLE_PDF_FILE_PATH);
    });

    test("Get Article from S3 Bucket", async () => {
        const articleStream = await articleStorage.getArticle("sample.pdf");
        console.log(articleStream);
    });

    test("Delete Article from S3 Bucket", async () => {
        await articleStorage.deleteArticle("sample.pdf");
    });


});
