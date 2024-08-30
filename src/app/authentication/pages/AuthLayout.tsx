import { Outlet } from 'react-router-dom';
import { AuthNavbar } from '../components/AuthNavbar';

export const AuthLayout = () => {
  return (
    <div className="h-screen flex">
      <AuthNavbar />
      <main className="w-full h-screen">
        <Outlet />
      </main>
    </div>
  );
};
