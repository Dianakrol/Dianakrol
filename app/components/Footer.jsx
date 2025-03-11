const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-10">
        <p className="mb-2">Hecho con ❤️ usando Remix y Tailwind CSS
        © 2025 Diana Carolina López. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/diana-carolina-lopez-ramos-47986b45/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:karolopez1010@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  