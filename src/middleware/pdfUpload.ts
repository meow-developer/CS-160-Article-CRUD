import { ArticleFileValidator } from '../validator/article.js';
import multer from 'multer'

export const pdfUpload = multer({ 
    dest: 'uploads/',
    fileFilter: (new ArticleFileValidator()).fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 30, // 30MB
        files: 1
    }
});
