import { FC } from 'react';
import { Link } from 'react-router-dom';

import logoUfps from '@/assets/logo-vertical-ufps.svg';

interface BrandLogoProps {
  to?: string;
}

export const BrandLogo: FC<BrandLogoProps> = ({ to = "" }) => {
  return (
    <Link to={to} className="flex gap-x-2">
      <img className="w-8 rounded" src={logoUfps} alt="logo universidad" />
      <div className="flex flex-col leading-none">         
        <div className="text-gray-600">Practicas Empresariales</div>
        <div className="text-sm/4 text-gray-400">Ingieneria de sistemas</div>
      </div>
    </Link>
  );
};
