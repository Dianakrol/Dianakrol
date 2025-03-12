export default function Contacto() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
      <h2 className="text-6xl font-extrabold text-teal-400 tracking-wide">Contacto</h2>
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg mt-12">
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Puedes contactarme a través de los siguientes medios:
        </p>
        <ul className="text-gray-300 space-y-6 text-lg">
          <li>📧 <span className="font-semibold">Correo:</span> <a href="mailto:karolopez1010@gmail.com" className="text-teal-400 hover:underline">karolopez1010@gmail.com</a></li>
          <li>📱 <span className="font-semibold">Celular:</span> <a href="tel:+573126972611" className="text-teal-400 hover:underline">+57 312 697 2611</a></li>
          <li>🔗 <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/diana-carolina-lopez-ramos-47986b45/" className="text-teal-400 hover:underline">Diana Carolina López</a></li>
          <li>💬 <span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/573126972611" className="text-green-400 hover:underline">Envíame un mensaje</a></li>
        </ul>
      </div>
    </div>
  );
}

  