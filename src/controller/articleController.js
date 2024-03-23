/**
 * Creating a new article
 * HTTP Method: POST
 * Path: /article
 */
const createArticle = (req, res) => {

};


/**
 * Fetching a list of articles
 * HTTP Method: GET
 * Path: /article
 */
const listArticle = (req, res) => {

    const query = req.query;

    const DEFAULT_ARTICLE_COUNT_LIMIT = 10;
    const articleCountLimit = query.limit || DEFAULT_ARTICLE_COUNT_LIMIT;


};


/**
 * Fetching a single article
 * HTTP Method: GET
 * Path: /article/:articleId
 */
const getArticle = (req, res) => {
    const articleId = req.params.articleId;


};

/**
 * Updating an article
 * HTTP Method: PATCH
 * Path: /article/:articleId
 */
const updateArticle = (req, res) => {
    const articleId = req.params.articleId;

};

/**
 * Deleting an article
 * HTTP Method: DELETE
 * Path: /article/:articleId
 */

const deleteArticle = (req, res) => {
    const articleId = req.params.articleId;

};

export {createArticle, listArticle, getArticle, updateArticle, deleteArticle};