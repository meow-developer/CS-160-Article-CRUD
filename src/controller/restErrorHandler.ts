import { Response } from "express";
import { ServiceRestError } from "../service/ServiceRestError.js";

export function handleRestError(err: any, res: Response){
    if (err instanceof ServiceRestError){
        res.status(err.statusCode).send(err.message);
        return;
    } else {
        res.status(500).send('Internal Server Error');
        return;
    }
}