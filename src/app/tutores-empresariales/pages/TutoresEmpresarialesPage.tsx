import { useTutoresEmpresariales } from '../hooks/useTutoresEmpresariales';

export const TutoresEmpresarialesPage = () => {
  const { data } = useTutoresEmpresariales();
  return (
    <div>
      TutoresEmpresarialesPage
      { JSON.stringify(data) }
    </div>
  );
}
