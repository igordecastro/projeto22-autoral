import express from 'express';
import { scheduleController } from '../controllers/schedule-controller';

const router = express.Router();

router.put('/schedule/:id', scheduleController);

export default router;
