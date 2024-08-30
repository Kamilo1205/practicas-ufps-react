import { useMutation } from '@tanstack/react-query';
import authApi from '../api/auth.api';

export const useForgotPassword = () => {
  return useMutation({ mutationFn: authApi.forgotPassword });
};

export const useRegister = () => {
  return useMutation({ mutationFn: authApi.register });
};

export const useResetPassword = () => {
  return useMutation({ mutationFn: authApi.resetPassword });
};

export const useVerifyEmail = (token: string) => {
  return useMutation({ mutationFn: () => authApi.verifyEmail(token) });
};
