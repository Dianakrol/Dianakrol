export default function Contacto() {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p>Puedes contactarme a través de los siguientes medios:</p>
        <ul className="mt-4">
          <li>
            📧 Correo: <a href="mailto:karolopez1010@gmail.com" className="text-blue-400">karolopez1010@gmail.com</a>
          </li>
          <li>
            📱 Celular: <a href="tel:+573126972611" className="text-blue-400">+57 312 697 2611</a>
          </li>
          <li>
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/diana-carolina-lopez-ramos-47986b45/" className="text-blue-400" target="_blank" rel="noopener noreferrer">Diana Carolina López</a>
          </li>
          <li>
            💬 WhatsApp: <a href="https://wa.me/573126972611" className="text-green-400" target="_blank" rel="noopener noreferrer">Envíame un mensaje</a>
          </li>
        </ul>
      </div>
    );
  }
  
  