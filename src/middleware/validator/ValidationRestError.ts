export default class ValidationRestError extends Error{
    statusCode: number;
    publicMessage: string;

    constructor(internalMessage: string, 
                statusCode: number = 400, 
                publicMessage: string = "Bad Request"){
        super(internalMessage);
        this.statusCode = statusCode;
        this.publicMessage = publicMessage;
    }
}