import express from 'express';
import articleRouter from './router.js';
import { errorHandlingMiddleware } from './middleware/restErrorHandler.js';
import morgan from 'morgan';

const app = express();
const PORT = 8080;

app.use(morgan('combined'));
const ACCOUNT_ARTICLE_API_ENDPOINT = 'account';

app.use(`/${ACCOUNT_ARTICLE_API_ENDPOINT}`, articleRouter);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});