import React, { createContext, useContext, ReactNode } from 'react';
import { useMutation, UseMutationResult, useQuery, useQueryClient } from '@tanstack/react-query';

import { Usuario } from '@/app/usuario/types/usuarioTypes';
import { LoginSchema } from '../schemas/authSchema';
import authApi from '../api/auth.api';

interface AuthContextProps {
  user: Usuario | null | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginMutation: UseMutationResult<Usuario, unknown, LoginSchema>;
  logoutMutation: UseMutationResult<void, unknown, void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery<Usuario, Error>({
    queryKey: ['usuario'],
    queryFn: authApi.fetchUser,
    retry: false,
  });

  useQuery({
    queryKey: ['refresh-token'],
    queryFn: authApi.refreshAccessToken,
    enabled: !!user, // Solo habilitar la consulta si el usuario está autenticado
    refetchInterval: 10 * 60 * 1000, // Intervalo de 10 minutos
  });

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['usuario'] });
    },
  });

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => queryClient.setQueryData(['usuario'], data)
  });

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoading, loginMutation, logoutMutation, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
