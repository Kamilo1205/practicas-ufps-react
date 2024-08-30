import axios from '@/api/axios';
import { Empresa } from '../types/empresasTypes';

const EMPRESAS_BASE_URL = '/empresas';

export const empresasApi = {
  getEmpresas: async (): Promise<Empresa[]> => {
    const { data } = await axios.get<Empresa[]>(`${EMPRESAS_BASE_URL}`);
    return data;
  }
};

export default empresasApi;
