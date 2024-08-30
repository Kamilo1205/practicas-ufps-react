import { useQuery } from '@tanstack/react-query';

import { Dependencia } from '../types/dependenciaTypes';
import { dependenciasApi } from '../api/dependenciaApi';

// Hook para obtener todas las dependencias
export const useDependencias = () => {
  return useQuery<Dependencia[], Error>({
    queryKey: ['dependencias'],
    queryFn: dependenciasApi.getDependencias,
  });
};

// Hook para obtener una dependencia por ID
export const useDependenciaById = (dependenciaId: string) => {
  return useQuery<Dependencia, Error>({
    queryKey: ['dependencia', dependenciaId],
    queryFn: () => dependenciasApi.getDependenciasById(dependenciaId),
    enabled: !!dependenciaId, // Solo ejecuta la query si existe un ID
  });
};
