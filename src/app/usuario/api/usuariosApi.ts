import axios from '@/api/axios';
import { Usuario } from '../types/usuarioTypes';

const USUARIOS_BASE_URL = '/usuarios';

export const usuariosApi = {
  getUsuarios: async (): Promise<Usuario[]> => {
    const { data } = await axios.get<Usuario[]>(`${USUARIOS_BASE_URL}`);
    return data;
  }
};

export default usuariosApi;
