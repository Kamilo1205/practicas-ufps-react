import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/app/authentication';

export const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <h1>Loadind</h1>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/authentication" />;
};