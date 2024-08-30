import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';
import { DashboardRoutes } from './DashboardRoutes';

import { Loading } from '@/components/ui/Loading';

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/authentication/*' element={<AuthRoutes />} />
        <Route path='/dashboard/*' element={<DashboardRoutes />} />
        <Route path='*' element={<Navigate to={'/authentication'} />} />
      </Routes>
    </Suspense>
  );
}
