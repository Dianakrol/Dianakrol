import { useNavigate, useLocation } from "@remix-run/react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mostrarBotonAtras = location.pathname !== "/";
  const mostrarTitulo = location.pathname !== "/";

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center shadow-md">
      {mostrarBotonAtras && (
        <button
          onClick={() => navigate(-1)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg mr-4"
        >
          ⬅ Atrás
        </button>
      )}
      {mostrarTitulo && (
        <h1 className="text-xl font-bold">Portafolio</h1>
      )}
    </header>
  );
};

export default Header;

