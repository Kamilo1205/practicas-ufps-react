import { useQuery } from '@tanstack/react-query';

import { Empresa } from '../types/empresasTypes';
import { empresasApi } from '../api/empresasApi';

// Hook para obtener todos las empresas
export const useEmpresas = () => {
  return useQuery<Empresa[], Error>({
    queryKey: ['empresas'], 
    queryFn: empresasApi.getEmpresas
  });
};
