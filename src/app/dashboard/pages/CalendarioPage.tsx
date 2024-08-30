import moment from 'moment';
import 'moment/dist/locale/es';


export const CalendarioPage = () => {
  return (
    <div className="p-16">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-900 font-extrabold text-4xl">Calendario</h1>
        <span className="hidden sm:block first-letter:capitalize text-gray-500 text-sm">{ moment().format('dddd D [de] MMMM [de] YYYY') }</span>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            
          </div>
          <div>
            <form className="grid grid-cols-2 gap-4">  
              
                <div className="flex flex-col">
                  <label className="text-base text-gray-900 font-medium">Inicio del semestre</label>
                  <input className="border border-gray-100" type="date" />
                </div>
                <div className="flex flex-col">
                  <label className="text-base text-gray-900 font-medium">Fin del semestre</label>
                  <input className="border border-gray-100" type="date" />
                </div>
              
                <div className="flex flex-col">
                  <label className="text-base text-gray-900 font-medium">Inicio de entrega del plan de trabajo</label>
                  <input className="border border-gray-100" type="date" />
                </div>
                <div className="flex flex-col">
                  <label className="text-base text-gray-900 font-medium">Fin de entrega del plan de trabajo</label>
                  <input className="border border-gray-100" type="date" />
                </div>

                <div className="flex flex-col">
                  <label className="text-base text-gray-900 font-medium">Inicio de entrega del primer informe</label>
                  <input className="border border-gray-100" type="date" />
                </div>
                <div className="flex flex-col">
                  <label className="text-base text-gray-900 font-medium">Fin de entrega del Primer informe</label>
                  <input className="border border-gray-100" type="date" />
                </div>

                <div className="flex flex-col">
                  <label className="text-base text-gray-900 font-medium">Inicio de entrega del último informe</label>
                  <input className="border border-gray-100" type="date" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-900 font-medium">Fin de entrega del último informe</label>
                  <input className="border border-gray-100" type="date" />
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
