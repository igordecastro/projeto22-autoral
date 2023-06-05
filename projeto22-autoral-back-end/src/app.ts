import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

import { handleApplicationErrors } from '@/middlewares';
import { authenticationRouter, pacientsRouter } from "./routers";
import httpStatus from "http-status";

const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/pacient',pacientsRouter)
  .use('/sign-in', authenticationRouter)
  .get('*', (req, res) => {
    res.status(httpStatus.NOT_FOUND).send('Rota não encontrada');
  })
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
