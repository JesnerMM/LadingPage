import React, { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .font-playfair-bold {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
        }
        .font-inter-semibold {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }
        .fade-in {
          opacity: 0;
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
          transform: translateX(-40px);
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .sandwich-icon {
          width: 50px;
          height: 50px;
          margin-bottom: 12px;
        }
        @media (min-width: 640px) {
          .sandwich-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 16px;
          }
        }
      `}</style>

      <section
        id="hero"
        className="w-full min-h-[80vh] sm:min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center relative overflow-hidden"
      >
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div
            ref={textRef}
            className={`w-full md:w-1/2 mb-6 sm:mb-8 md:mb-0 md:pr-6 lg:pr-8 xl:pr-10 fade-in ${
              isVisible ? "visible" : ""
            } flex flex-col items-center md:items-start text-center md:text-left`}
          >
            <img
              src="/IconoGauche.png"
              alt="Un ícono de una rebanada de queso verde brillante con agujeros ovalados blancos delineados en negro, con un borde negro grueso y ondulado, diseñado por Kactus para el Guche."
              className="sandwich-icon fade-in visible mx-auto md:mx-0"
            />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] text-green-800 mb-4 sm:mb-6 leading-tight font-playfair-bold text-left">
              Sándwich{" "}
              <span className="inline md:hidden">
                <br className="m-0 p-0" />
              </span>
              Turrialba
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-700 mb-6 sm:mb-8 font-inter-semibold text-left leading-snug">
              Descubre el sabor auténtico
              <br />
              de Turrialba
            </p>
            <div className="w-full flex justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 font-inter-semibold text-sm sm:text-base md:text-lg"
              >
                Quiero probar esta receta
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div
              ref={imageRef}
              className={`rounded-lg overflow-hidden shadow-xl fade-in ${
                isVisible ? "visible" : ""
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Un sándwich grande y robusto con pan de baguette con sésamo, abundante lechuga verde, rodajas de tomate rojo, pepinillos en rodajas, varias carnes frías (incluido lo que parece ser jamón o salami) y queso en lonchas, todo sobre una tabla de cortar de madera."
                className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
