import { useQuery } from '@tanstack/react-query';
import usuariosApi from '../api/usuariosApi';

export const useUsuarios = () => {
  return useQuery({
    queryKey: ['usuarios'],
    queryFn: usuariosApi.getUsuarios
  });
}
