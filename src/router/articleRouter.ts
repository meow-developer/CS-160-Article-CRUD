import { Router } from 'express';
import * as articleController from '../controller/articleController.js';
import { articleIdValidator, articleQueryValidator } from '../middleware/validator/article.js';

import ArticleFileValidator from '../middleware/validator/articleFile.js';
import { handleExpressValidation } from '../middleware/validator/expressValidatorHandler.js';
import UserExtractor from '../middleware/userExtractor.js';

const router = Router();

router.use(new UserExtractor()._);

router.post('/', 
    new ArticleFileValidator()._,
    articleController.createArticle
);


router.get(`/`, articleController.listArticle);

router.get('/:articleId', 
            articleQueryValidator, 
            articleIdValidator,
            handleExpressValidation,  
            articleController.getArticle);

router.put('/:articleId', 
            articleIdValidator,
            handleExpressValidation,
            new ArticleFileValidator()._, 
            articleController.updateArticle);

router.delete('/:articleId', 
                articleIdValidator, 
                handleExpressValidation,
                articleController.deleteArticle);

export default router;