import { invalidDataError } from "@/errors";
import scheduleRepository from '../repositories/schedule-repository';

async function updateScheduleAvailability (id: number) {
  try {
    const schedule = await scheduleRepository.findById(id);

    if (!schedule) {
      throw invalidDataError(["Schedule not found!"]);
    }

    scheduleRepository.updatedSchedule(id);
  } catch (error) {
    throw error;
  }
};

export default { updateScheduleAvailability };
