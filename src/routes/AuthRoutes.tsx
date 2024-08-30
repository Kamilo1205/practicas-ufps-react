import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoute } from '@/guards';
import { AuthLayout, ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage } from '@/app/authentication';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="reset-password/:token" element={<ResetPasswordPage />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="verify-email/:token" element={<VerifyEmailPage />} />
      </Route>
    </Routes>
  );
}
