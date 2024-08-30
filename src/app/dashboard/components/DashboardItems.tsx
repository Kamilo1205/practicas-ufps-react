import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineCog6Tooth, HiOutlineEnvelope, HiOutlineHome, HiOutlineUserCircle, HiOutlineUsers } from 'react-icons/hi2';
import { DashboardItem } from './DashboardItem';

export const DashboardItems = () => {
  return (
    <div className="flex flex-col h-full max-h-full justify-between">
      <nav>
        <ul>
          <li>
            <DashboardItem label="Inicio" icon={HiOutlineHome} to="" />
          </li>
          <li>
            <DashboardItem
              label="Configuración"
              icon={HiOutlineCog6Tooth}
              to="configuracion"
            />
          </li>
          <li>
            <DashboardItem label="Calendario" icon={HiOutlineCalendar} to="calendario" />
          </li>
        </ul>
      </nav>

      <nav className="mt-6">
        <span className="text-sm font-semibold pl-1 text-gray-400">
          Administrador
        </span>
        <ul>
          <li>
            <DashboardItem label="Usuarios" icon={HiOutlineUserCircle} to="usuarios" />
          </li>
          <li>
            <DashboardItem
              label="Estudiantes"
              icon={HiOutlineAcademicCap}
              to="estudiantes"
            />
          </li>
          <li>
            <DashboardItem label="Empresas" icon={HiOutlineBriefcase} to="empresas" />
          </li>
          <li>
            <DashboardItem
              label="Tutores Empresariales"
              icon={HiOutlineUsers}
              to="tutores-empresariales"
            />
          </li>
          <li>
            <DashboardItem
              label="Solicitud de Practicantes"
              icon={HiOutlineEnvelope}
              to="solicitud de practicantes"
            />
          </li>
        </ul>
      </nav>

      <nav className="mt-6">
        <span className="text-sm font-semibold pl-1 text-gray-400">
          Empresa
        </span>
        <ul>
          <li>
            <DashboardItem
              label="Practicantes"
              icon={HiOutlineUsers}
              to="practicantes"
            />
          </li>
          <li>
            <DashboardItem
              label="Tutores Empresariales"
              icon={HiOutlineAcademicCap}
              to="tutores-empresariales"
            />
          </li>
          <li>
            <DashboardItem
              label="Solicitud de Practicantes"
              icon={HiOutlineEnvelope}
              to="solicitud de practicantes"
            />
          </li>
        </ul>
      </nav>

      <nav className="mt-6">
        <span className="text-sm font-semibold pl-1 text-gray-400">Tutor</span>
        <ul>
          <li>
            <DashboardItem
              label="Practicantes"
              icon={HiOutlineUsers}
              to="practicantes"
            />
          </li>
        </ul>
      </nav>

      <nav className="mt-6">
        <span className="text-sm font-semibold pl-1 text-gray-400">
          Estudiante
        </span>
        <ul>
          <li>
            <DashboardItem label="Empresa" icon={HiOutlineBriefcase} to="empresa" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
