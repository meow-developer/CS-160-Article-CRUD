import { ExpressValidator } from "express-validator";
import ArticleDb from "../repo/articleDb.js";

export const articleValidator = new ExpressValidator({
    isArticleExist: async (value: number) => {
        const articleDb = ArticleDb.getInstance();
        const articleCount = await articleDb.countArticleByArticleId(value);

        if (articleCount === 0){
            throw new Error('Article does not exist');
        }
    }
})

export const articleIdValidator = articleValidator.param('articleId')
                                                    .isInt({min: 1})
                                                    .isArticleExist();