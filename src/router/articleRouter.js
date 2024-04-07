import { Router } from 'express';
import * as articleController from '../controller/articleController.js';
import multer from 'multer'

import { ArticleFileValidator } from '../validator/article.js';

const router = Router();
const pdfUpload = multer({ 
    dest: 'uploads/',
    fileFilter: (new ArticleFileValidator()).fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 30, // 30MB
        files: 1
    }
});

router.get(`/`, articleController.listArticle);
router.get(`/:articleId`, articleController.getArticle);
router.post(`/`, pdfUpload.single("pdf"), articleController.createArticle);
router.put(`/:articleId`, articleController.updateArticle);
router.delete(`/:articleId`, articleController.deleteArticle);

export default router;