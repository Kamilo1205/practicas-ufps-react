import { useAreasInteres } from '../hooks/useAreasInteres';

export const AreasInteresPage = () => {
  const { data } = useAreasInteres();

  return (
    <>
        <div>AreasInteresPage</div>
        {JSON.stringify(data)}
    </>
  );
}
