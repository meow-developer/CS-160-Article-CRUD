import { Router } from 'express';
import * as articleController from '../controller/articleController.js';
import { pdfUpload } from '../middleware/pdfUpload.js';
import { articleIdValidator } from '../middleware/validator/article.js';
import { checkUploadFileExist } from '../middleware/validator/articleFile.js';

const router = Router();



router.get(`/`, articleController.listArticle);

router.get('/:articleId', articleIdValidator, articleController.getArticle);

router.post('/', checkUploadFileExist, articleController.createArticle);

router.put('/:articleId', checkUploadFileExist, articleIdValidator, articleController.updateArticle);

router.delete('/:articleId', articleIdValidator, articleController.deleteArticle);
export default router;