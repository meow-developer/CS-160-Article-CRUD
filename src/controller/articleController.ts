import ArticleCreateService from '../service/articleCreate.js';
import ArticleGetService from '../service/articleGet.js';
import ArticleDeleteService from '../service/articleDelete.js';

import { NextFunction, Request, Response } from 'express';

/**
 * Creating a new article
 * HTTP Method: POST
 * Path: /article
 */
const createArticle = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articleFile = req.ownValidation.validatedData["pdf"]; //The file is guaranteed to exist at this point
        const articleCreateService = new ArticleCreateService();

        const articleId = await articleCreateService.save(articleFile);
        res.status(200).json({ articleId: articleId })
        
        const articleRemove = req.ownValidation.extra.pdfRemove;
        await articleRemove();
        
    } catch (err) {
        next(err);
    }
};

/**
 * Fetching a list of articles
 * HTTP Method: GET
 * Path: /article
 * 
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {void}
 */
const listArticle = (req: Request, res: Response) => {
    const query = req.query;
    // Default limit for the number of articles to fetch
    const DEFAULT_ARTICLE_COUNT_LIMIT = 10;
    /** 
    * Fetching the limit from the query parameters
    * If the limit is not provided, the default limit will be used 
    */
    const articleCountLimit = query.limit || DEFAULT_ARTICLE_COUNT_LIMIT;


};


/**
 * Fetching a single article
 * HTTP Method: GET
 * Path: /article/:articleId
 * 
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {void}
 */
const getArticle = async (req: Request, res: Response, next: NextFunction) => {
    // Extracting the articleId from the request parameters
    const articleId = req.params.articleId;

    const articleGetService = new ArticleGetService(parseInt(articleId));

    try {
        const articleFilePath = await articleGetService.get();
        res.status(200).sendFile(articleFilePath);

        res.on("finish", async() => {
            console.log("Deleting article from disk");
            await articleGetService.deleteArticleFromDisk();
        });

    } catch (err) {
        next(err);
    }
};

/**
 * Updating an article
 * HTTP Method: PUT
 * Path: /article/:articleId
 * 
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {void}
 */
const updateArticle = (req: Request, res: Response) => {
    // Extracting the articleId from the request parameters
    const articleId = req.params.articleId;

};

/**
 * Deleting an article
 * HTTP Method: DELETE
 * Path: /article/:articleId
 * 
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {void}
 */

const deleteArticle = async (req: Request, res: Response, next: NextFunction) => {
    // Extracting the articleId from the request parameters
    const articleId = req.params.articleId;

    const articleDeleteService = new ArticleDeleteService(parseInt(articleId));

    try {
        await articleDeleteService.delete();
        res.status(200).send('Article deleted successfully');
    } catch (err) {
        next(err);
    }
};

export { createArticle, listArticle, getArticle, updateArticle, deleteArticle };