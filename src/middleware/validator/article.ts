import { ExpressValidator } from "express-validator";
import ArticleDb from "../../repo/articleDb.js";
import ValidationRestError from "./ValidationRestError.js";


export const articleValidator = new ExpressValidator({
    isArticleExist: async (value: number) => {
        const articleDb = ArticleDb.getInstance();
        const articleCount = await articleDb.countArticleByArticleId(value);

        if (articleCount === 0){
            throw new ValidationRestError('Article does not exist', 404, 'Article not found');
        }
    }
})

export const articleIdValidator = articleValidator.param('articleId')
                                                    .isInt({min: 1})
                                                    .isArticleExist();