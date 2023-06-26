import express from 'express';
import { scheduleController } from '../controllers/schedule-controller';

const scheduleRouter = express.Router();

scheduleRouter.put('/:id', scheduleController);

export { scheduleRouter };
