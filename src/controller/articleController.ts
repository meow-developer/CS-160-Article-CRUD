import ArticleCreateService from '../service/articleCreate.js';
import ArticleGetService from '../service/articleGet.js';
import ArticleDeleteService from '../service/articleDelete.js';
import ArticlesGetService from '../service/articlesGet.js';
import RestResponseMaker from './tools/responseMaker.js';

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

        const response = RestResponseMaker.makeSuccessResponse({ articleId: articleId });

        res.status(200).json(response)
        
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
const listArticle = async(req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    // Default limit for the number of articles to fetch
    const DEFAULT_ARTICLE_COUNT_LIMIT = 10;
    let articleCountLimit = DEFAULT_ARTICLE_COUNT_LIMIT;

    if (query.limit){
        articleCountLimit = parseInt(query.limit as string);
    }
    try {
        const articlesGetService = new ArticlesGetService();
        const articles = await articlesGetService.get(articleCountLimit);

        const response = RestResponseMaker.makeSuccessResponse({
            "articles": articles,
        });
        res.status(200).json(response);
    } catch (err) {
        next(err);
    }

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

    const articleGetService = new ArticleGetService(parseInt(articleId), req);

    try {
        const articleFilePath = await articleGetService.get();
        res.status(200).sendFile(articleFilePath);

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
        const response = RestResponseMaker.makeSuccessResponse("Article deleted successfully");
        res.status(200).send(response);
        
    } catch (err) {
        next(err);
    }
};

export { createArticle, listArticle, getArticle, updateArticle, deleteArticle };