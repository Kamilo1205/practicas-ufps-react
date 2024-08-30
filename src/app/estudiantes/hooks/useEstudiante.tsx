import { useQuery, useQueryClient } from '@tanstack/react-query';

import { estudiantesApi } from '../api/estudiantesApi';
import { Estudiante, Semestre } from '../types/estudiantesType';

// Hook para obtener todos los estudiantes
export const useEstudiantes = () => {
  return useQuery<Estudiante[], Error>({
    queryKey: ['estudiantes'], 
    queryFn: estudiantesApi.getEstudiantes
  });
};

// Hook para obtener el estudiante por id
export const useEstudianteById = (estudianteId: string) => {
  return useQuery<Estudiante, Error>({
    queryKey: ['estudiante', estudianteId], 
    queryFn: () => estudiantesApi.getEstudianteById(estudianteId),
    enabled: !!estudianteId
  });
};

// Hook para obtener estudiantes del semestre actual
export const useEstudiantesBySemestreActual = () => {
  return useQuery<Estudiante[], Error>({ 
    queryKey: ['estudiantes', 'semestre-actual'], 
    queryFn: estudiantesApi.getEstudiantesBySemestreActual 
  });
};

// Hook para obtener semestres por ID de estudiante
export const useSemestresByEstudianteId = (estudianteId: string) => {
  return useQuery<Semestre[], Error>({
    queryKey: ['semestres', estudianteId], 
    queryFn: () => estudiantesApi.getSemestresByEstudianteId(estudianteId),
    enabled: !!estudianteId
  });
};

// Hook para obtener estudiantes por ID de semestre
export const useEstudianteBySemestreId = (semestreId: string) => {
  return useQuery<Estudiante[], Error>({
    queryKey: ['estudiantes', semestreId], 
    queryFn: () => estudiantesApi.getEstudianteBySemestreId(semestreId),
    enabled: !!semestreId
  });
};

export const usePrefetchEstudiantes = () => {
  const queryClient = useQueryClient();

  const prefetch = {
    estudiantes: () => queryClient.prefetchQuery({ queryKey: ['estudiantes'], queryFn: estudiantesApi.getEstudiantes }),
    estudiantesBySemestreActual: () => queryClient.prefetchQuery({ queryKey: ['estudiantes', 'semestre-actual'], queryFn: estudiantesApi.getEstudiantesBySemestreActual }),
    estudianteById: (estudianteId: string) => queryClient.prefetchQuery({ queryKey: ['estudiante', estudianteId], queryFn: () => estudiantesApi.getEstudianteById(estudianteId) }),
    semestresByEstudianteId: (estudianteId: string) => queryClient.prefetchQuery({ queryKey: ['semestres', estudianteId], queryFn: () => estudiantesApi.getSemestresByEstudianteId(estudianteId) }),
    estudianteBySemestreId: (semestreId: string) => queryClient.prefetchQuery({ queryKey: ['estudiantes', semestreId], queryFn: () => estudiantesApi.getEstudianteBySemestreId(semestreId) })
  };

  return prefetch;
};
