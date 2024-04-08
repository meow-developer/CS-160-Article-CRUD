export class ServiceRestError extends Error{
    statusCode: number;
    publicMessage: string;

    constructor(internalMessage: string, 
                statusCode: number = 500, 
                publicMessage: string = "Internal Server Error"){
        super(internalMessage);
        this.statusCode = statusCode;
        this.publicMessage = publicMessage;
    }
}