import express from 'express';
import articleRouter from './router/articleRouter.js';
import cors from 'cors';
import { errorHandlingMiddleware } from './middleware/restErrorHandler.js';
import morgan from 'morgan';

const app = express();
const PORT = 8080;

app.use(morgan('combined'));

const ARTICLE_API_ENDPOINT = 'article';
const CORS_OPTIONS = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE"
};

app.use(cors(CORS_OPTIONS));


app.use(`/${ARTICLE_API_ENDPOINT}`, articleRouter);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});