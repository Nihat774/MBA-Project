import { navLinks } from "../constants/navLinks";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-100 -mx-10 px-10 md:-mx-20 md:px-20 dark:bg-gray-900 dark:text-gray-200 mt-10">
      <div className="max-w-7xl  px-6 py-10 flex flex-col md:flex-row justify-between gap-10 border-b -mx-10 md:-mx-20 border-gray-300 dark:border-gray-700">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <p className="text-2xl font-bold">MBA Company</p>
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            Lorem ipsum elit.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              Pages
            </h3>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors duration-300"
            >
              Home
            </a>
            {navLinks.slice(0, 2).map((item) => (
              <a
                href={item.path}
                key={item.id}
                className="hover:text-sky-600 transition-colors duration-300"
              >
                {item.text}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              More
            </h3>
            {navLinks.slice(2, 6).map((item) => (
              <a
                href={item.path}
                key={item.id}
                className="hover:text-sky-600 transition-colors duration-300"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Sosial icons and contact */}
        <div className="flex flex-col items-center md:items-end gap-5">
          <div className="bg-gray-800 dark:bg-gray-700 rounded-2xl px-8 py-5 text-white w-fit shadow-md">
            <p className="font-semibold text-lg text-center mb-2">Follow us</p>
            <div className="flex justify-center gap-4 text-2xl">
              <Link
                to=""
                className="hover:text-[#d53808] transition-colors duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                to=""
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                to=""
                className="hover:text-sky-500 transition-colors duration-300"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl shadow-md transition-all duration-300"
          >
            Contact us
          </a>
        </div>
      </div>

      <p className="text-center -mx-10 md:-mx-20  text-gray-600 dark:text-gray-400 py-4 text-sm">
        &copy; 2025 All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
