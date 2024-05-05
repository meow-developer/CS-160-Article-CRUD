import express from 'express';
import articleRouter from './router.js';
import cors from 'cors';
import { errorHandlingMiddleware } from './middleware/restErrorHandler.js';
import morgan from 'morgan';

const app = express();
const PORT = 8080;

app.use(morgan('combined'));
const ACCOUNT_API_ENDPOINT = 'account';

const CORS_OPTIONS = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE"
};

app.use(cors(CORS_OPTIONS));


app.use(`/${ACCOUNT_API_ENDPOINT}`, articleRouter);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
