import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <img
        src="/profile.png"
        alt="Diana Carolina López"
        className="w-40 h-40 rounded-full border-4 border-teal-400"
      />
      <h1 className="text-4xl font-bold mt-4">Diana Carolina López</h1>
      <p className="text-lg text-gray-300 mt-2">Desarrolladora Web | React | Remix | Tailwind</p>

      <div className="mt-6 flex space-x-4">
        <Link to="/proyectos" className="px-4 py-2 bg-teal-500 rounded-lg">Proyectos</Link>
        <Link to="/contacto" className="px-4 py-2 bg-gray-700 rounded-lg">Contacto</Link>
      </div>
    </div>
  );
}
