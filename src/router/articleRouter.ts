import { Router } from 'express';
import * as articleController from '../controller/articleController.js';
import { articleIdValidator } from '../middleware/validator/article.js';

import ArticleFileValidator from '../middleware/validator/articleFile.js';
import { errorHandlingMiddleware} from '../middleware/restErrorHandler.js';

const router = Router();

router.post('/', 
    new ArticleFileValidator()._,
    articleController.createArticle
);

router.get(`/`, articleController.listArticle);

router.get('/:articleId', articleIdValidator, articleController.getArticle);

router.put('/:articleId', articleIdValidator, new ArticleFileValidator()._, articleController.updateArticle);

router.delete('/:articleId', articleIdValidator, articleController.deleteArticle);

router.use(errorHandlingMiddleware);
export default router;