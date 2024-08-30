import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { AreaInteres } from '../types/AreaInteresTypes';
import { areasInteresApi } from '../api/areasInteres.api';

// Hook para obtener todas las áreas de interés
export const useAreasInteres = () => {
  return useQuery<AreaInteres[], Error>({
    queryKey: ['areasInteres'],
    queryFn: areasInteresApi.getAreasInteres,
  });
};

// Hook para obtener un área de interés por ID
export const useAreaInteresById = (areaInteresId: string) => {
  return useQuery<AreaInteres, Error>({
    queryKey: ['areaInteres', areaInteresId],
    queryFn: () => areasInteresApi.getAreaInteresById(areaInteresId),
    enabled: !!areaInteresId, // Solo ejecuta la query si existe un ID
  });
};

// Hook para crear un área de interés
export const useCreateAreaInteres = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: areasInteresApi.createAreaInteres,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areasInteres'] });
    },
  });
};

// Hook para actualizar un área de interés
export const useUpdateAreaInteres = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ areaInteresId, updatedAreaInteres }: { areaInteresId: string; updatedAreaInteres: AreaInteres }) => 
      areasInteresApi.updateAreaInteres(areaInteresId, updatedAreaInteres),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areasInteres'] });
    },
  });
};

// Hook para eliminar un área de interés
export const useDeleteAreaInteres = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: areasInteresApi.deleteAreaInteres,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areasInteres'] });
      queryClient.invalidateQueries({ queryKey: ['deletedAreasInteres'] });
    },
  });
};

// Hook para restaurar un área de interés
export const useRestoreAreaInteres = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: areasInteresApi.restoreAreaInteres,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areasInteres'] });
      queryClient.invalidateQueries({ queryKey: ['deletedAreasInteres'] });
    },
  });
};

// Hook para obtener las áreas de interés eliminadas
export const useDeletedAreasInteres = () => {
  return useQuery<AreaInteres[], Error>({
    queryKey: ['deletedAreasInteres'],
    queryFn: areasInteresApi.getDeletedAreasInteres,
  });
};
