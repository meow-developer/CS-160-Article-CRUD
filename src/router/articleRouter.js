import { Router } from 'express';
import * as articleController from '../controller/articleController.js';

const router = Router();


router.get(`/`, articleController.listArticle);
router.get(`/:articleId`, articleController.getArticle);
router.post(`/`, pdfUpload.single("pdf"), articleController.createArticle);
router.put(`/:articleId`, articleController.updateArticle);
router.delete(`/:articleId`, articleController.deleteArticle);

export default router;