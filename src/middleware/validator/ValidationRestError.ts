import { Request } from "express";
import { RestError } from "../../restError.js";
import { OwnValidationResult, CustomRequest } from "./ownValidator.js";

export default class ValidationRestError extends RestError{
    public statusCode: number;
    public publicMessage: string;

    constructor(internalMessage: string, 
                statusCode: number = 400, 
                publicMessage: string = "Bad Request"){
        super(internalMessage);
        this.statusCode = statusCode;
        this.publicMessage = publicMessage;
    }
}

export const throwOwnValidatorError = async (req: Request): Promise<void> => {
    const customReq = req as CustomRequest;
    
    return new Promise((resolve, reject) => {
        const isErrorOccurred =  OwnValidationResult.isFail(customReq);
        if (isErrorOccurred) {
            const failResult = OwnValidationResult.getUniqueFailResult(customReq)!;
            reject(new ValidationRestError("Validation Error", failResult.failPublicStatusCode, failResult.failPublicMsg));
        } else {
            resolve();
        }
    });
}