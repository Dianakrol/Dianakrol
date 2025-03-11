export default function Proyectos() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h2 className="text-3xl font-bold text-teal-400">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Portfolio Web</h3>
            <p className="text-gray-300">Sitio web profesional construido con Remix y Tailwind.</p>
            <a href="https://github.com/Dianakrol/Dianakrol" className="text-teal-400">Ver en GitHub</a>
          </div>
        </div>
      </div>
    );
  }
  