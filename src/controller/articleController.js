import { Request, Response } from 'express';

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
const getArticle = (req, res) => {
    // Extracting the articleId from the request parameters
    const articleId = req.params.articleId;


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