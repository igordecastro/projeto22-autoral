import { Request, Response } from 'express';
import scheduleService from '../services/schedule-service';

const scheduleController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await scheduleService.updateScheduleAvailability(+id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { scheduleController }
