import { Outlet } from 'react-router-dom';
import { Navegation } from '../components/Navegation';


export const DashboardLayout = () => {
  return (
    <div className="flex w-screen h-screen">
      <Navegation />
       
      <main className="flex-1 h-full overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
