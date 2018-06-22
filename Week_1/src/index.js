import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import restify from 'express-restify-mongoose';
import expressListRoutes from 'express-list-routes';
import UserModel from './models/user';

const app = express();
const router = express.Router();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
restify.serve(router, UserModel);
expressListRoutes({}, 'Endpoints:', router);

app.get('/', (req, res) => res.json({ hello: 'world!' }));

mongoose.connect(process.env.DATABASE_CONN, () => {
  const { log } = console;

  log(chalk.bgBlue.black('\nConnected to database\n'));
  app.listen(3000, () => {
    log(chalk.bgGreen.black('Server listening on http://localhost:3000\n'));
  });
});

export default app;
