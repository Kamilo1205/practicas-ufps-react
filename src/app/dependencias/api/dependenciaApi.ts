import axios from '@/api/axios';
import { Dependencia } from '../types/dependenciaTypes';

const DEPENDENCIA_BASE_URL = '/dependencias';

export const dependenciasApi = {
  getDependencias: async (): Promise<Dependencia[]> => {
    const { data } = await axios.get<Dependencia[]>(`${DEPENDENCIA_BASE_URL}`);
    return data;
  },

  getDependenciasById: async (dependenciaId: string): Promise<Dependencia> => {
    const { data } = await axios.get<Dependencia>(`${DEPENDENCIA_BASE_URL}/${dependenciaId}`);
    return data;
  }
};

export default dependenciasApi;