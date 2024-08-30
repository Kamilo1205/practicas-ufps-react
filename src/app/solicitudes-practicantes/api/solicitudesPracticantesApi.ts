import axios from '@/api/axios';
import { SolicitudPracticantes } from '../types/solicitudPracticantesTypes';

const SOLICITUDES_PRACTICANTES_BASE_URL = '/solicitudes-practicantes';

export const solicitudesPracticantesApi = {
  getSolicitudesPracticantes: async (): Promise<SolicitudPracticantes[]> => {
    const { data } = await axios.get<SolicitudPracticantes[]>(`${SOLICITUDES_PRACTICANTES_BASE_URL}`);
    return data;
  },
  getSolicitudPracticantesById: async (SolicitudPracticaId: string): Promise<SolicitudPracticantes> => {
    const { data } = await axios.get<SolicitudPracticantes>(`${SOLICITUDES_PRACTICANTES_BASE_URL}/${SolicitudPracticaId}`);
    return data;
  },
  getSolicitudesPracticantesBySemestreActual: async (): Promise<SolicitudPracticantes[]> => {
    const { data } = await axios.get<SolicitudPracticantes[]>(`${SOLICITUDES_PRACTICANTES_BASE_URL}/semestre-actual`);
    return data;
  },
  getSolicitudPracticantesBySemestreId: async (semestreId: string): Promise<SolicitudPracticantes[]> => {
    const { data } = await axios.get<SolicitudPracticantes[]>(`${SOLICITUDES_PRACTICANTES_BASE_URL}/semestre/${semestreId}`);
    return data;
  }
};

export default solicitudesPracticantesApi;
