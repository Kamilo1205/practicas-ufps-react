import { useQuery } from '@tanstack/react-query';

import { TutorEmpresarial } from '../types/tutorEmpresarialTypes';
import tutoresEmpresarialesApi from '../api/tutoresEmpresarialesApi';

// Hook para obtener todos los tutores empresariales
export const useTutoresEmpresariales = () => {
  return useQuery<TutorEmpresarial[], Error>({
    queryKey: ['tutoresEmpresariales'],
    queryFn: tutoresEmpresarialesApi.getTutoresEmpresariales
  });
};

// Hook para obtener un tutor empresarial por su ID
export const useTutorEmpresarialById = (tutorEmpresarialId: string) => {
  return useQuery<TutorEmpresarial, Error>({
    queryKey: ['tutorEmpresarial', tutorEmpresarialId],
    queryFn: () => tutoresEmpresarialesApi.getTutorEmpresarialById(tutorEmpresarialId),
    enabled: !!tutorEmpresarialId, // Solo ejecuta la query si existe un ID
  });
};

// Hook para obtener tutores empresariales del semestre actual
export const useTutoresEmpresarialesBySemestreActual = () => {
  return useQuery<TutorEmpresarial[], Error>({
    queryKey: ['tutoresEmpresariales', 'semestreActual'],
    queryFn: tutoresEmpresarialesApi.getTutoresEmpresarialesBySemestreActual
  });
};

// Hook para obtener los semestres de un tutor empresarial por su ID
export const useSemestresByTutorEmpresarialId = (tutorEmpresarialId: string) => {
  return useQuery<TutorEmpresarial, Error>({
    queryKey: ['tutorEmpresarial', tutorEmpresarialId, 'semestres'],
    queryFn: () => tutoresEmpresarialesApi.getSemestresByTutorEmpresarialId(tutorEmpresarialId),
    enabled: !!tutorEmpresarialId, // Solo ejecuta la query si existe un ID  
  });
};

// Hook para obtener tutores empresariales por ID de semestre
export const useTutoresEmpresarialesBySemestreId = (semestreId: string) => {
  return useQuery<TutorEmpresarial[], Error>({
    queryKey: ['tutoresEmpresariales', 'semestre', semestreId],
    queryFn: () => tutoresEmpresarialesApi.getTutoresEmpresarialesBySemestreId(semestreId),
    enabled: !!semestreId, // Solo ejecuta la query si existe un ID de semestre
  });
};
