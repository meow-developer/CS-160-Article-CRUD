import { Request, Response, NextFunction } from "express";

interface BaseResult {
    isCheckPass: boolean;
    validationMessage?: string;
}


interface PassResult extends BaseResult {
    isCheckPass: true;
    failPublicMsg?: undefined;
    failPublicStatusCode?: undefined;
}

interface FailResult extends BaseResult {
    isCheckPass: false;
    failPublicMsg: string;
    failPublicStatusCode?: number;
}


type TestResult = PassResult | FailResult;

type Test = { [testName: string]: TestResult };


export type CustomRequest = Request & {
    ownValidationResult: Test
}   


export class OwnValidationResult {
    public static getResult = (req: CustomRequest) => {
        return req.ownValidationResult;
    }
    public static getUniqueFailResult = (req: CustomRequest) => {
        let failResult: FailResult | null = null;
        const testResult = req.ownValidationResult;
        for (const testName in testResult) {
            const test = testResult[testName];
            if (!test.isCheckPass) {
                failResult = test;
                break;
            }
        }
        return failResult;
    }
    public static isFail = (req: CustomRequest) => {
        return OwnValidationResult.getUniqueFailResult(req) !== null;
    }
}

export abstract class OwnValidator {
    protected ownValidationResult: Test | undefined;

    constructor(){
        this._ = this._.bind(this);
    }

    protected initReqTest(req: Request){
        const customReq = req as CustomRequest;

        customReq.ownValidationResult = {};
        this.ownValidationResult = customReq.ownValidationResult;
    }
    
    private addTestResult(testName: string, testResult: TestResult){
        this.ownValidationResult![testName] = testResult;
    }

    protected addPassResult(testName: string, validationMessage?: string){
        this.addTestResult(testName, {
            isCheckPass: true,
            validationMessage
        });
    }    

    protected addFailResult(testName: string, failPublicMsg: string = "Bad Request", failPublicStatusCode: number = 400, validationMessage?: string){
        this.addTestResult(testName, {
            isCheckPass: false,
            failPublicMsg,
            failPublicStatusCode,
            validationMessage
        });
    }

    public async _(req: Request, res: Response, next: NextFunction){
        this.initReqTest(req);
        try {
            await this.validate(req, res, next);
            next();
        } catch (err) {
            res.status(500).send("Internal server error");
        }
    }

    abstract validate(req: Request, res: Response, next: NextFunction): Promise<void>;
}