import express from 'express';
import articleRouter from './router/articleRouter.js';

const app = express();

const ARTICLE_API_ENDPOINT = 'article';

app.use(`/${ARTICLE_API_ENDPOINT}`, articleRouter);


const PORT = 8080;



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });