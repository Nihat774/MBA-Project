import { FaEnvelope, FaWhatsapp } from "react-icons/fa"

function Contact() {
  return (
     <div
        id="contact"
        className="bg-gray-900 text-white py-20 flex flex-col items-center justify-center text-center px-10 -mx-10 md:px-20 md:-mx-20"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-400 mb-12 max-w-xl">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Gmail */}
          <a
            href="mailto:yourname@gmail.com"
            className="flex items-center gap-4 bg-gray-800 hover:bg-red-600 transition-all duration-300 px-8 py-4 rounded-2xl shadow-lg"
          >
            <FaEnvelope className="text-3xl" />
            <div className="text-left">
              <h3 className="text-lg font-semibold">Gmail</h3>
              <p className="text-gray-300 text-sm">yourname@gmail.com</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/994501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-800 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl shadow-lg"
          >
            <FaWhatsapp className="text-3xl" />
            <div className="text-left">
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <p className="text-gray-300 text-sm">+994 50 123 45 67</p>
            </div>
          </a>
        </div>
      </div>
  )
}

export default Contact