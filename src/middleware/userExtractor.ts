import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

export default class UserExtractor {

    public async _(req: Request, res: Response, next: NextFunction){
        const urlSplit = req.url.split('/');
        const userId = urlSplit[1];

        req.userId = userId;
        next();
    }
}