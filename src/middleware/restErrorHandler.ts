import { Response } from "express";
import { RestError } from "../restError.js";


export const errorHandlingMiddleware = (err: any, req: any, res: Response, next: any) => { 
    if (res.headersSent) {
        return next(err)
    }
    if (err instanceof RestError){
        res.status(err.statusCode).send(err.message);
        return;
    } else {
        res.status(500).send('Internal Server Error');
        return;
    }
}