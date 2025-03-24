import { useNavigate } from "@remix-run/react";

export default function Proyectos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans flex flex-col justify-between">
      <div>
        <h2 className="text-6xl font-extrabold text-teal-400 tracking-wide">Mis Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Proyecto 1: Portafolio Web */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-white">🌐 Portafolio Web</h3>
            <p className="text-gray-300 text-lg mt-2">
              Sitio web profesional construido con Remix y Tailwind.
            </p>
            <a 
              href="https://github.com/Dianakrol/Dianakrol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-lg font-medium hover:underline mt-4 block"
            >
              Ver en en la GitHub →
            </a>
            <a 
              href="https://portfolio-dianakrol.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-lg font-medium hover:underline mt-4 block"
            >
              Ver en en la WEB →
            </a>
          </div>

          {/* Proyecto 2: Fundación Antivirus */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-white">🏫 Fundación Antivirus</h3>
            <p className="text-gray-300 text-lg mt-2">
              Implementación de frontend con angular
            </p>
            <a 
              href="https://github.com/Dianakrol/Fundacion_Antivirus_Angular" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-lg font-medium hover:underline mt-4 block"
              
            >
              Ver en GitHub →
            </a>
            <a 
              href="https://dianakrol.github.io/Fundacion_Antivirus_Angular" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-lg font-medium hover:underline mt-4 block"
            >
              Ver en la WEB →
            </a>
          </div>

          {/* Proyecto 3: Gestor de Inventarios */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-white">📦 Gestor_Inventario_Backend</h3>
            <p className="text-gray-300 text-lg mt-2">
              Aplicación CRUD con .NET, PostgreSQL y React.
            </p>
            <a 
              href="https://github.com/Dianakrol/Gestor_Inventario_Backend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 text-lg font-medium hover:underline mt-4 block"
            >
              Ver en GitHub →
            </a>
          </div>

         
        </div>
      </div>

      {/* Botón Atrás al final */}
      <button 
        onClick={() => navigate(-1)} 
        className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700 transition mt-12 self-center"
      >
        ⬅ Atrás
      </button>
    </div>
  );
}


