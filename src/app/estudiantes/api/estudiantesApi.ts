import axios from '@/api/axios';
import { Estudiante, Semestre } from '../types/estudiantesType';

const ESTUDIANTES_BASE_URL = '/estudiantes';

export const estudiantesApi = {
  getEstudiantes: async (): Promise<Estudiante[]> => {
    const { data } = await axios.get<Estudiante[]>(`${ESTUDIANTES_BASE_URL}`);
    return data;
  },
  getEstudianteById: async (estudianteId: string): Promise<Estudiante> => {
    const { data } = await axios.get<Estudiante>(`${ESTUDIANTES_BASE_URL}/${estudianteId}`);
    return data;
  },
  getEstudiantesBySemestreActual: async (): Promise<Estudiante[]> => {
    const { data } = await axios.get<Estudiante[]>(`${ESTUDIANTES_BASE_URL}/semestre-actual`);
    return data;
  },
  getSemestresByEstudianteId: async (estudianteId: string): Promise<Semestre[]> => {
    const { data } = await axios.get<Semestre[]>(`${ESTUDIANTES_BASE_URL}/${estudianteId}/semestres`);
    return data;
  },
  getEstudianteBySemestreId: async (semestreId: string): Promise<Estudiante[]> => {
    const { data } = await axios.get<Estudiante[]>(`${ESTUDIANTES_BASE_URL}/semestre/${semestreId}`);
    return data;
  }
};

export default estudiantesApi;
