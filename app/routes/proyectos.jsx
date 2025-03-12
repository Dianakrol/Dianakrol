import { useNavigate } from "@remix-run/react";

export default function Proyectos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      {/* Botón Atrás */}
      <button 
        onClick={() => navigate(-1)} 
        className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-700 transition mb-6"
      >
        ⬅ Atrás
      </button>

      <h2 className="text-6xl font-extrabold text-teal-400 tracking-wide">Mis Proyectos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-white">Portfolio Web</h3>
          <p className="text-gray-300 text-lg mt-2">
            Sitio web profesional construido con Remix y Tailwind.
          </p>
          <a 
            href="https://github.com/Dianakrol/Dianakrol" 
            className="text-teal-400 text-lg font-medium hover:underline mt-4 block"
          >
            Ver en GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
