import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
export const SocialLinks = () => {
  return (
    <footer className="w-full bg-green-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-playfair-bold mb-2">
              Don Pepe y elguche.com
            </h3>
            <p className="text-green-200 font-inter-semibold">
              Descubriendo la gastronomía auténtica de Costa Rica
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-green-200 font-inter-semibold mb-4">
              Síguenos en redes sociales
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="bg-green-700 w-10 h-10 rounded-full flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="bg-green-700 w-10 h-10 rounded-full flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/?lang=es"
                target="_blank"
                className="bg-green-700 w-10 h-10 rounded-full flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200 text-sm font-inter-semibold">
          <p>
            &copy; {new Date().getFullYear()} Don Pepe y elguche.com. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
