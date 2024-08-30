import { BrandLogo } from '@/components/ui/BrandLogo';

export const AuthNavbar = () => {
  return (
    <nav 
      className="flex justify-between items-center w-full py-3 px-3 
      text-basetext-gray-700 font-semibold absolute top-0 text-nowrap"
    >
      <BrandLogo to=""/>
    </nav>
  );
}
