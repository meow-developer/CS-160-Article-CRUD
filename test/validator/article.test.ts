//@ts-nocheck
import { ArticleFileValidator } from '../../src/validator/article';


describe("Article File Validator", () => {

    const articleFileValidator = new ArticleFileValidator();

    test("Check file extension", () => {
        const file = {
            mimetype: "application/pdf"
        }
       expect(() => articleFileValidator.checkFileExtension(file)).not.toThrow()
    });

    test("Check file extension", () => {
        const file = {
            mimetype: "application/pda"
        }
       expect(() => articleFileValidator.checkFileExtension(file)).toThrow()
    });


});