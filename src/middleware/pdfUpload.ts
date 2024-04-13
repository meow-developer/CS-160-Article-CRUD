import multer from 'multer'

export const pdfUpload = multer({ 
    dest: 'uploads/',
    limits: {
        fileSize: 1024 * 1024 * 30, // 30MB
        files: 1,
        parts: 1,
        fieldNameSize: 50
    }
    
}).single('pdf');