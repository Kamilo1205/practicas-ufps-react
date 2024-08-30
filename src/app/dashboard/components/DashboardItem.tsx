import { ElementType, FC } from 'react';
import { NavLink } from 'react-router-dom';

interface DashboardItemProps {
  to: string,
  label: string;
  icon: ElementType;
}

export const DashboardItem: FC<DashboardItemProps> = ({ to, label, icon: Icon }) => {
  return (
    <NavLink
      to={to} 
      className="group relative flex min-h-[27px] h-[30px] cursor-pointer text-sm py-1 px-2 gap-x-2
        rounded-md hover:bg-neutral-200/50 items-center w-full font-medium text-nowrap 
        whitespace-nowrap overflow-hidden"
    >
      <Icon className="flex-shrink-0 text-gray-500 transition-colors size-[20px]"/>
      { label }
    </NavLink>
  );
}
