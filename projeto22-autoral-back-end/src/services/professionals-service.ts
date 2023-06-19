import professionalsRepository from '@/repositories/professionals-repository';

function getProfessionals() {
  return professionalsRepository.getProfessionals()
}

const professionalsService = {
  getProfessionals,
}

export default professionalsService;