import { Router } from 'express';
import * as articleController from '../controller/articleController.js';
import { articleIdValidator, articleQueryValidator } from '../middleware/validator/article.js';

import ArticleFileValidator from '../middleware/validator/articleFile.js';
import bodyParser from 'body-parser';


const router = Router();

router.post('/', 
    new ArticleFileValidator()._,
    articleController.createArticle
);


router.get(`/`,  articleController.listArticle);

router.get('/:articleId', articleQueryValidator, articleIdValidator, articleController.getArticle);

router.put('/:articleId', articleIdValidator, new ArticleFileValidator()._, articleController.updateArticle);

router.delete('/:articleId', articleIdValidator, articleController.deleteArticle);

export default router;