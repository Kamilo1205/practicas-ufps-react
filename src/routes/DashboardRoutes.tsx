import { Route, Routes } from 'react-router-dom';

import { PrivateRoute, RolesRoute } from '@/guards';
import { RolName } from '@/app/usuario/enums/roles.enum';

import { CalendarioPage, DashboardLayout, HomePage } from '@/app/dashboard';
import { TutorEmpresarialPage, TutoresEmpresarialesPage } from '@/app/tutores-empresariales/pages';
import { SolicitudesPracticasPage, SolicitudPracticantesPage } from '@/app/solicitudes-practicantes/pages';
import { EmpresaPage, EmpresasPage } from '@/app/empresas/pages';
import { EstudiantePage, EstudiantesPage } from '@/app/estudiantes/pages';
import { UsuariosPage } from '@/app/usuario/pages';
import { AreasInteresPage } from '@/app/areas-interes/pages';
import { DependenciaPage, DependenciasPage } from '@/app/dependencias/pages'
import { TutoresInstitucionalesPage, TutorInstitucionalPage } from '@/app/tutores-institucionales/pages';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          <Route index element={<HomePage/>} />
          <Route path="calendario" element={<CalendarioPage />} />

          <Route path="administrador" element={<RolesRoute allowedRoles={[RolName.TUTOR_INSTITUCIONAL, RolName.DIRECTOR_PROGRAMA]} />}>
            {/* Usuarios */}
            <Route path="usuarios" element={<UsuariosPage />} />
            {/* Estudiantes */}
            <Route path="estudiantes" element={<EstudiantesPage />} />
            <Route path="estudiante/:id" element={<EstudiantePage />} />
            {/* Empresas */}
            <Route path="empresas" element={<EmpresasPage />} />
            <Route path="empresa/:id" element={<EmpresaPage />} />
            {/* Tutores Empresariales */}
            <Route path="tutores-empresariales" element={<TutoresEmpresarialesPage />} />
            <Route path="tutor-empresarial/:id" element={<TutorEmpresarialPage />} />
            {/* Tutores Institucionales */}
            <Route path="tutores-institucionales" element={<TutoresInstitucionalesPage />} />
            <Route path="tutor-institucional/:id" element={<TutorInstitucionalPage />} />
            {/* Solicitudes de Practicantes */}
            <Route path="solicitudes-de-practicantes" element={<SolicitudesPracticasPage />} />
            <Route path="solicitud-de-practicantes/:id" element={<SolicitudPracticantesPage />} />
            {/* Dependencias */}
            <Route path="dependencias" element={<DependenciasPage />} />
            <Route path="dependencia/:id" element={<DependenciaPage />} />
            {/* Areas de Interes */}
            <Route path="areas-interes" element={<AreasInteresPage />} />
          </Route>

          <Route path="estudiante" element={<RolesRoute allowedRoles={[RolName.ESTUDIANTE]} />}>
            <Route element={<h1>Hola Estudiante</h1>} path="empresa" />
          </Route> 

          <Route path="empresa" element={<RolesRoute allowedRoles={[RolName.EMPRESA]} />}>
            <Route path="practicantes" element={<h1>Hola Empresa</h1>} />
          </Route>

          <Route path="tutor-empresarial" element={<RolesRoute allowedRoles={[RolName.TUTOR_EMPRESARIAL]} />}>
            <Route path="practicantes" element={<h1>Hola Tutor Empresarial</h1>} />
          </Route>  

          <Route path="*" element={<HomePage/>} />
        </Route>
      </Route>
    </Routes>
  );
}
