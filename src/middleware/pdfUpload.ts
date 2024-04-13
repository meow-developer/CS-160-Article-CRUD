import multer from 'multer'

export const pdfUpload = multer({ 
    dest: 'uploads/',
    limits: {
        fileSize: 1024 * 1024 * 30, // 30MB
        files: 1
    }
}).single('pdf');