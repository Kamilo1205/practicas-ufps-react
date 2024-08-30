import axios from '@/api/axios';
import { TutorEmpresarial } from '../types/tutorEmpresarialTypes';

const TUTOR_EMPRESARIAL_BASE_URL = '/tutores-empresariales';

export const tutoresEmpresarialesApi = {
  getTutoresEmpresariales: async (): Promise<TutorEmpresarial[]> => {
    const { data } = await axios.get<TutorEmpresarial[]>(`${TUTOR_EMPRESARIAL_BASE_URL}`);
    return data;
  },
  getTutorEmpresarialById: async (tutorEmpresarialId: string): Promise<TutorEmpresarial> => {
    const { data } = await axios.get<TutorEmpresarial>(`${TUTOR_EMPRESARIAL_BASE_URL}/${tutorEmpresarialId}`);
    return data;
  },
  getTutoresEmpresarialesBySemestreActual: async (): Promise<TutorEmpresarial[]> => {
    const { data } = await axios.get<TutorEmpresarial[]>(`${TUTOR_EMPRESARIAL_BASE_URL}/semestre-actual`);
    return data;
  },
  getSemestresByTutorEmpresarialId: async (tutorEmpresarialId: string): Promise<TutorEmpresarial> => {
    const { data } = await axios.get<TutorEmpresarial>(`${TUTOR_EMPRESARIAL_BASE_URL}/${tutorEmpresarialId}/semestres`);
    return data;
  },
  getTutoresEmpresarialesBySemestreId: async (semestreId: string): Promise<TutorEmpresarial[]> => {
    const { data } = await axios.get<TutorEmpresarial[]>(`${TUTOR_EMPRESARIAL_BASE_URL}/semestre/${semestreId}`);
    return data;
  }
};

export default tutoresEmpresarialesApi;
