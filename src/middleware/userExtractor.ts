import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

class UserExtractorError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export default class UserExtractor {
    private extractUserIdFromJWT = (JWT: string) => {
        let decoded = jwt.decode(JWT);
        decoded = decoded as { userId: string };

        const userId = decoded!.userId;
        return userId;
    }

    public async _(req: Request, res: Response, next: NextFunction){
        const JWT = req.headers.authorization;

        if (!JWT) {
            next(new UserExtractorError('JWT not found'));
            return;
        }

        const userId = this.extractUserIdFromJWT(JWT);
        req.userId = userId;
    }
}