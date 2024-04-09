import { Router } from 'express';
import * as articleController from '../controller/articleController.js';
import { pdfUpload } from '../middleware/pdfUpload.js';
import { articleIdValidator } from '../validator/article.js';


const router = Router();


router.get(`/`, articleController.listArticle);
router.get(`/:articleId`, articleIdValidator, articleController.getArticle);

router.post(`/`, pdfUpload.single("pdf"), articleController.createArticle);
router.put(`/:articleId`, articleIdValidator, pdfUpload.single("pdf"), articleController.updateArticle);
router.delete(`/:articleId`, articleIdValidator, articleController.deleteArticle);

export default router;