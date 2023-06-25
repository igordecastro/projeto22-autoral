import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';

loadEnv();

import { handleApplicationErrors } from '@/middlewares';
import { authenticationRouter, patientsRouter, appointmentsRouter, professionalsRouter } from './routers';
import httpStatus from 'http-status';

const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/sign-in', authenticationRouter)
  .use('/patients',patientsRouter)
  .use('/appointments', appointmentsRouter)
  .use('/professionals', professionalsRouter)
  .get('*', (req, res) => {
    res.status(httpStatus.NOT_FOUND).send('Endpoint not found!');
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
