import express from 'express';
import errorHandler from './modules/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express();
const PORT = 5000;

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// for package json из видео про babel
// "start": "npm run build && node build",
// "build": "npm run clean && babel src -d build",
// "dev": "nodemon --inspect -r dotenv/config -r babel-register src",

// const j = JSON.stringify(obj) - перевод объекта в JSON
// const z = JSON.parse(j) - перевод обратно в объект

// babel src/index.js -d lib
