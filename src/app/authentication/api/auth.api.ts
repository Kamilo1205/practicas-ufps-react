import axios from '@/api/axios';

import { Usuario } from '@/app/usuario/types/usuarioTypes';
import { ForgotPasswordSchema, LoginSchema, RegisterSchema } from '../schemas/authSchema';

const AUTH_BASE_URL = '/authentication';

export const authApi = {
  // Function to login
  login: async (loginSchema: LoginSchema): Promise<Usuario> => {
    const { data } = await axios.post<Usuario>(`${AUTH_BASE_URL}/login`, loginSchema);
    return data;
  },

  // Function to register
  register: async (registerSchema: RegisterSchema): Promise<Usuario> => {
    const { data } = await axios.post<Usuario>(`${AUTH_BASE_URL}/register`, registerSchema);
    return data;
  },

  // Function to logout
  logout: async (): Promise<void> => {
    await axios.post(`${AUTH_BASE_URL}/logout`);
  },

  // Function to fetch the user profile
  fetchUser: async (): Promise<Usuario> => {
    const { data } = await axios.get<Usuario>(`${AUTH_BASE_URL}/profile`);
    return data;
  },

  // Function to refresh access token
  refreshAccessToken: async (): Promise<void> => {
    const { data } = await axios.get<void>(`${AUTH_BASE_URL}/refresh`);
    return data;
  },

  // Function to verify email
  verifyEmail: async (token: string): Promise<void> => {
    const { data } = await axios.get<void>(`${AUTH_BASE_URL}/verify-email?token=${token}`);
    return data;
  },

  // Function to reset confirmation link
  resetConfirmationLink: async (): Promise<void> => {
    const { data } = await axios.post<void>(`${AUTH_BASE_URL}/resend-confirmation-link`);
    return data;
  },

  // Function to forgot password
  forgotPassword: async (forgotPassword: ForgotPasswordSchema): Promise<void> => {
    const { data } = await axios.post<void>(`${AUTH_BASE_URL}/forgot-password`, forgotPassword);
    return data;
  },

  // Function to reset password
  resetPassword: async ({ token, password }: { token: string, password: string }): Promise<void> => {
    const { data } = await axios.post<void>(`${AUTH_BASE_URL}/reset-password`, { token, password });
    return data;
  },

  // Function to change password
  changePassword: async ({ currentPassword, newPassword }: { currentPassword: string, newPassword: string }): Promise<void> => {
    const { data } = await axios.post<void>(`${AUTH_BASE_URL}/change-password`, { currentPassword, newPassword });
    return data;
  }
};

export default authApi;
