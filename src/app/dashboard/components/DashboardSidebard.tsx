import { ElementRef, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { HiBars3, HiMiniChevronDoubleLeft, HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineCog6Tooth, HiOutlineEnvelope, HiOutlineHome, HiOutlineUserCircle, HiOutlineUsers } from 'react-icons/hi2';

import { BrandLogo } from '@/components/ui/BrandLogo';
import { cn } from '@/lib/utils';
import { Item } from './Item';

export const DashboardSidebard = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isResizingRef = useRef<boolean>(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isMobile);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;
    
    if (newWidth < 272) newWidth = 272;
    if (newWidth > 480) newWidth = 480;
    
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
    }
  }

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%": "272px";
      navbarRef.current.style.setProperty(
        "width", 
        isMobile ? "0": "calc(100% - 272px)"
      );
      navbarRef.current.style.setProperty(
        "left", 
        isMobile ? "100%": "272px"
      );
      setTimeout(() => setIsResetting(false), 500);
    }
  }

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 500);
    }
  }

  useEffect(() => {
    if (isMobile) collapse();
    else resetWidth();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          `group/sidebar h-full bg-neutral-100 overflow-y-auto relative 
          flex flex-col w-[17rem] z-[111] overflow-x-hidden text-nowrap`,
          isResetting && "transition-all ease-in-out duration-500",
          isMobile && "w-0"
        )}
      >
        <div 
          role="button"
          onClick={collapse}
          className={cn(`h-6 w-6 z-10 text-gray-400 rounded-sm 
            hover:bg-neutral-200 hover:text-gray-500 absolute top-3 right-2
            opacity-0 group-hover/sidebar:opacity-100 transition`,
            isMobile && "opacity-100"
          )}
        >
          <HiMiniChevronDoubleLeft className="size-6" />
        </div>

        <div className="p-3 text-base text-gray-700 font-semibold">
          <BrandLogo /> 
        </div>

        <div className="p-3">
          <nav>
            <ul>
              <li>
                <Item label="Inicio" icon={HiOutlineHome} to="" />
              </li>
              <li>
                <Item label="Configuración" icon={HiOutlineCog6Tooth} to="configuracion" />
              </li>
              <li>
                <Item label="Calendario" icon={HiOutlineCalendar} to="calendario" />
              </li>
            </ul>
          </nav>

          <nav className="mt-6">
            <span className="text-sm font-semibold pl-1 text-gray-400">Administrador</span>
            <ul>
              <li>
                <Item label="Usuarios" icon={HiOutlineUserCircle} to="usuarios" />
              </li>
              <li>
                <Item label="Estudiantes" icon={HiOutlineAcademicCap} to="estudiantes" />
              </li>
              <li>
                <Item label="Empresas" icon={HiOutlineBriefcase} to="empresas" />
              </li>
              <li>
                <Item label="Tutores Empresariales" icon={HiOutlineUsers} to="tutores-empresariales" />
              </li>
              <li>
                <Item label="Solicitud de Practicantes" icon={HiOutlineEnvelope} to="solicitud de practicantes" />
              </li>               
            </ul>
          </nav>

          <nav className="mt-6">
            <span className="text-sm font-semibold pl-1 text-gray-400">Empresa</span>
            <ul>
              <li>
                <Item label="Practicantes" icon={HiOutlineUsers} to="practicantes" />
              </li>
              <li>
                <Item label="Tutores Empresariales" icon={HiOutlineAcademicCap} to="tutores-empresariales" />
              </li>
              <li>
                <Item label="Solicitud de Practicantes" icon={HiOutlineEnvelope} to="solicitud de practicantes" />
              </li>               
            </ul>
          </nav>

          <nav className="mt-6">
            <span className="text-sm font-semibold pl-1 text-gray-400">Tutor</span>
            <ul>
              <li>
                <Item label="Practicantes" icon={HiOutlineUsers} to="practicantes" />
              </li>               
            </ul>
          </nav>

          <nav className="mt-6">
            <span className="text-sm font-semibold pl-1 text-gray-400">Estudiante</span>
            <ul>
              <li>
                <Item label="Empresa" icon={HiOutlineBriefcase} to="empresa" />
              </li>               
            </ul>
          </nav>

        </div>

        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth} 
          className="opacity-0 hover:opacity-100
            transition cursor-col-resize absolute h-full w-[3px] bg-gray-200
            right-0 top-0"
        />
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          `absolute top-0 z-[999999] left-[17rem] w-[calc(100%-272px)]`,
          isResetting && "transition-all ease-in-out duration-500",
          isMobile && "left-0 w-full",
        )}
      >
        <nav className="bg-transparent flex pl-3 py-3 pr-4 w-full">
          {
            isCollapsed && (
              <HiBars3 
                role="button" 
                onClick={resetWidth}
                className="size-6 text-gray-600" 
              />

            )
          }
        </nav>
      </div>
    </>
  );
}
