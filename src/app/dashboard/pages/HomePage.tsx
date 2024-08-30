import imagen from '@/assets/unboxing.svg';
import { useAuth } from '@/app/authentication/context/AuthContext';

export const HomePage = () => {
  const { user } = useAuth();
  
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4 leading-2">
      <img src={imagen} className="w-96" alt="Imagen de inicio" />
      <div className="text-sm text-center text-gray-900">
        <h2 className="text-lg font-medium">
          Bienvenid@ { " "}
          { user?.username || user?.email }
        </h2>
        <div>
          Practicas Empresariales UFPS
          <span className="text-gray-400 font-medium"> @Ingieneria de Sistemas</span>
        </div>
      </div>
    </div>
  );
}
