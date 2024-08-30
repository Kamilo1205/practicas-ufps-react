import { useParams } from 'react-router-dom';
import { useEstudianteById } from '../hooks/useEstudiante';

export const EstudiantePage = () => {
  const { id } = useParams();

  if (!id) { 
    throw Error('Estudiante no existe'); 
  }

  const { data, error, isLoading } = useEstudianteById(id);

  return (
    <div>
        { id }
        { JSON.stringify(data) }
    </div>
  )
}
