import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/app/authentication/context/AuthContext';

export const PublicRoute = () => {
  const { isAuthenticated } = useAuth(); 
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};
