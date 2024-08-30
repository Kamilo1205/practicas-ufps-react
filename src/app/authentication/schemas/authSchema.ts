import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'El correo es requerido' }).email({ message: 'Correo no válido' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  username: z.string().min(5, { message: 'El nombre es obligatorio' }),
  email: z.string().email({ message: 'Correo electrónico inválido' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Correo electrónico inválido' }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
