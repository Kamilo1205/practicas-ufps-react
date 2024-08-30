import { useEmpresas } from '../hooks/useEmpresas';

export const EmpresasPage = () => {
  const { data } = useEmpresas();

  return (
    <div>
      <div>
        <h1>Empresas</h1>
      </div>
      { JSON.stringify(data) }
    </div>
  );
}
