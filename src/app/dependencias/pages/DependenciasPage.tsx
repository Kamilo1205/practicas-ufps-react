import { useDependencias } from "../hooks/useDependencias";

export const DependenciasPage = () => {
  const { data } = useDependencias();

  return (
    <>
      <div>DependenciasPage</div>
      {JSON.stringify(data)}
    </>
  );
}
