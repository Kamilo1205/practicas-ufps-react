import { useSolicitudesPracticantes } from '../hooks/useSolicitudesPracticantes';

export const SolicitudesPracticasPage = () => {
  const { data } = useSolicitudesPracticantes();

  return (
    <div>
      SolicitudPracticasPage -+
      { JSON.stringify(data) }
    </div>
  );
}
