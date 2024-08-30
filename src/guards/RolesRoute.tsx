import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/app/authentication';

interface RoleRouteProps {
  allowedRoles: string[];
}

export const RolesRoute: FC<RoleRouteProps> = ({ allowedRoles }) => {
  const { user } = useAuth();

  const userHasRequiredRole = user?.roles.some((role) =>
    allowedRoles.includes(role.nombre)
  );

  return userHasRequiredRole ? <Outlet /> : <Navigate to="/" replace />;
};
