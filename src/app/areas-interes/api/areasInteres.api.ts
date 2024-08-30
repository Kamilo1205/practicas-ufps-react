import axios from '@/api/axios';
import { AreaInteres } from '../types/AreaInteresTypes';

const AREAS_INTERES_BASE_URL = '/areas-interes';

export const areasInteresApi = {
  getAreasInteres: async (): Promise<AreaInteres[]> => {
    const { data } = await axios.get<AreaInteres[]>(`${AREAS_INTERES_BASE_URL}`);
    return data;
  },

  getAreaInteresById: async (areaInteresId: string): Promise<AreaInteres> => {
    const { data } = await axios.get<AreaInteres>(`${AREAS_INTERES_BASE_URL}/${areaInteresId}`);
    return data;
  },

  createAreaInteres: async (newAreaInteres: AreaInteres): Promise<AreaInteres> => {
    const { data } = await axios.post<AreaInteres>(`${AREAS_INTERES_BASE_URL}`, newAreaInteres);
    return data;
  },

  updateAreaInteres: async (areaInteresId: string, updatedAreaInteres: AreaInteres): Promise<AreaInteres> => {
    const { data } = await axios.patch<AreaInteres>(`${AREAS_INTERES_BASE_URL}/${areaInteresId}`, updatedAreaInteres);
    return data;
  },

  deleteAreaInteres: async (areaInteresId: string): Promise<void> => {
    await axios.delete(`${AREAS_INTERES_BASE_URL}/${areaInteresId}`);
  },

  restoreAreaInteres: async (areaInteresId: string): Promise<AreaInteres> => {
    const { data } = await axios.patch<AreaInteres>(`${AREAS_INTERES_BASE_URL}/${areaInteresId}/restore`);
    return data;
  },

  getDeletedAreasInteres: async (): Promise<AreaInteres[]> => {
    const { data } = await axios.get<AreaInteres[]>(`${AREAS_INTERES_BASE_URL}/deleted`);
    return data;
  },
};

export default areasInteresApi;