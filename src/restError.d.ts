export abstract class RestError extends Error {
    statusCode: number;
    publicMessage: string;
}