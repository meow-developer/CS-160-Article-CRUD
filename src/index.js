import express from 'express';
import articleRouter from './router/articleRouter.js';
import cors from 'cors';

const app = express();
const PORT = 8080;

const ARTICLE_API_ENDPOINT = 'article';
const CORS_OPTIONS = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE"
};

app.use(cors());


app.use(`/${ARTICLE_API_ENDPOINT}`, articleRouter);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });