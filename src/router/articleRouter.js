import { Router } from 'express';
import * as articleController from '../controller/articleController.js';

const router = Router();

router.get(`/`, articleController.listArticle);
router.get(`/:id`, articleController.getArticle);
router.post(`/`, articleController.createArticle);
router.put(`/:id`, articleController.updateArticle);
router.delete(`/:id`, articleController.deleteArticle);

export default router;