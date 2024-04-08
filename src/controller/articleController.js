import { Request, Response } from 'express';
import ArticleCreateService from '../service/articleCreate.js';
import ArticleGetService, { ArticleGetError } from '../service/articleGet.js';
import { pdfUpload } from '../middleware/pdfUpload.js';
import { ArticleFileValidateFailError } from '../validator/article.js';

/**
 * Creating a new article
 * HTTP Method: POST
 * Path: /article
 * 
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {void}
 */
const createArticle = (req, res) => {
    pdfUpload(req, res, (err) => {

        if (err) {
            if (err instanceof ArticleFileValidateFailError) {
                res.status(400).send(err.message);
                return;
            } else {
                res.status(500).send('Internal Server Error');
                return;
            }
        }

        const articleFile = req.file;
        const articleCreateService = new ArticleCreateService();

        articleCreateService.save(articleFile).then(()=>{
            res.status(201).send('Article created successfully');
        }).catch((err)=>{
            res.status(500).send('Internal Server Error');
        });
    })
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
const listArticle = (req, res) => {
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
const getArticle = async (req, res) => {
    // Extracting the articleId from the request parameters
    const articleId = req.params.articleId;

    const articleGetService = new ArticleGetService();

    try {
        const articleFilePath = await articleGetService.getArticle(articleId);
        res.status(200).sendFile(articleFilePath);
        await articleGetService.deleteArticleFromDisk();

    } catch (err) {
        if (err instanceof ArticleGetError) {
            res.status(err.statusCode).send(err.message);
            return;
        } else {
            res.status(500).send('Internal Server Error');
            return;
        
        }
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
const updateArticle = (req, res) => {
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

const deleteArticle = (req, res) => {
    // Extracting the articleId from the request parameters
    const articleId = req.params.articleId;


};

export {createArticle, listArticle, getArticle, updateArticle, deleteArticle};