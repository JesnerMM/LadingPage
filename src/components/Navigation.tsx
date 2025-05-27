import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#DCFCE7] ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="src\img\IconoNav.png"
            alt="El isotipo de Don Pepe, diseñado por Kactus, es un oso de color marrón claro con orejas redondas, dos puntos negros como ojos y un cuadrado negro como nariz."
            className="w-10 h-10 object-contain"
            onClick={() => scrollToSection("hero")}
          />
          <h1 className="text-xl font-playfair-bold text-green-700">
            Sabor Turrialbeño
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-green-800 hover:text-green-600 transition-colors font-inter-semibold"
          >
            Sobre Nosotros
          </button>
          <button
            onClick={() => scrollToSection("ingredients")}
            className="text-green-800 hover:text-green-600 transition-colors font-inter-semibold"
          >
            Ingredientes
          </button>
          <button
            onClick={() => scrollToSection("preparation")}
            className="text-green-800 hover:text-green-600 transition-colors font-inter-semibold"
          >
            Preparación
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-green-800 hover:text-green-600 transition-colors font-inter-semibold"
          >
            Contacto
          </button>
        </div>

        <button
          className="md:hidden text-green-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#DCFCE7] shadow-lg absolute top-full left-0 right-0 py-4 animate-fadeIn">
          <div className="flex flex-col space-y-4 px-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-green-800 hover:text-green-600 py-2 transition-colors text-left font-inter-semibold"
            >
              Sobre el Proyecto
            </button>
            <button
              onClick={() => scrollToSection("ingredients")}
              className="text-green-800 hover:text-green-600 py-2 transition-colors text-left font-inter-semibold"
            >
              Ingredientes
            </button>
            <button
              onClick={() => scrollToSection("preparation")}
              className="text-green-800 hover:text-green-600 py-2 transition-colors text-left font-inter-semibold"
            >
              Preparación
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-green-800 hover:text-green-600 py-2 transition-colors text-left font-inter-semibold"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
