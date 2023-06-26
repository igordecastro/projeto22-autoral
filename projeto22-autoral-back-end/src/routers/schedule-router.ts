import express from 'express';
import { scheduleController } from '../controllers/schedule-controller';

const scheduleRouter = express.Router();

scheduleRouter.put('/schedule/:id', scheduleController);

export { scheduleRouter };
