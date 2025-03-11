export default function Contacto() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h2 className="text-3xl font-bold text-teal-400">Contáctame</h2>
        <p className="text-gray-300">Envíame un mensaje si quieres colaborar.</p>
        <form className="mt-4 space-y-4 w-full max-w-md">
          <input type="text" placeholder="Nombre" className="w-full p-2 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Correo" className="w-full p-2 rounded bg-gray-800 text-white" />
          <textarea placeholder="Mensaje" className="w-full p-2 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="px-4 py-2 bg-teal-500 rounded-lg w-full">Enviar</button>
        </form>
      </div>
    );
  }
  