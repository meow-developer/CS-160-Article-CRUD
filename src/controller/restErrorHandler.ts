import { Response } from "express";
import { RestError } from "../restError.js";

export function handleRestError(err: any, res: Response){
    if (err instanceof RestError){
        res.status(err.statusCode).send(err.message);
        return;
    } else {
        res.status(500).send('Internal Server Error');
        return;
    }
} 