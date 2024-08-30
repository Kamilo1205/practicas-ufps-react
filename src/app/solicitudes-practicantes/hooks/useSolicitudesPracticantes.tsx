import { useQuery } from '@tanstack/react-query';

import { SolicitudPracticantes } from '../types/solicitudPracticantesTypes';
import solicitudesPracticantesApi from '../api/solicitudesPracticantesApi';

// Hook para obtener todas las solicitudes de prácticas
export const useSolicitudesPracticantes = () => {
  return useQuery<SolicitudPracticantes[], Error>({
    queryKey: ['solicitudesPracticas'],
    queryFn: solicitudesPracticantesApi.getSolicitudesPracticantes
  });
};

// Hook para obtener una solicitud de práctica por su ID
export const useSolicitudPracticantesById = (solicitudPracticaId: string) => {
  return useQuery<SolicitudPracticantes, Error>({
    queryKey: ['solicitudPractica', solicitudPracticaId],
    queryFn: () => solicitudesPracticantesApi.getSolicitudPracticantesById(solicitudPracticaId),
    enabled: !!solicitudPracticaId, // Solo ejecuta la query si existe un ID
  });
};

// Hook para obtener las solicitudes de prácticas del semestre actual
export const useSolicitudesPracticasBySemestreActual = () => {
  return useQuery<SolicitudPracticantes[], Error>({
    queryKey: ['solicitudesPracticas', 'semestreActual'],
    queryFn: solicitudesPracticantesApi.getSolicitudesPracticantesBySemestreActual
  });
};

// Hook para obtener solicitudes de prácticas por ID de semestre
export const useSolicitudPracticaBySemestreId = (semestreId: string) => {
  return useQuery<SolicitudPracticantes[], Error>({
    queryKey: ['solicitudesPracticas', 'semestre', semestreId],
    queryFn: () => solicitudesPracticantesApi.getSolicitudPracticantesBySemestreId(semestreId),
    enabled: !!semestreId, // Solo ejecuta la query si existe un ID de semestre
  });
};
