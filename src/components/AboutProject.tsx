import React, { useEffect, useRef, useState } from "react";

export const AboutProject = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

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

        .fade-in, .fade-in-left, .fade-in-right, .fade-in-top {
          opacity: 0;
          transition: all 1.2s ease-in-out;
        }

        .fade-in { transform: translateY(100px); }
        .fade-in-left { transform: translateX(-80px); }
        .fade-in-right { transform: translateX(80px); }
        .fade-in-top { transform: translateY(-80px); }

        .visible {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="about"
        className="w-full bg-gradient-to-b from-green-50 to-white flex items-center relative overflow-hidden"
      >
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] text-green-800 mb-4 font-playfair-bold fade-in-left ${
                isVisible ? "visible" : ""
              }`}
            >
              Sobre Nosotros
            </h2>

            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 font-inter-semibold fade-in-left ${
                isVisible ? "visible" : ""
              }`}
            >
              Don Pepe, fotógrafo y aventurero gastronómico, se ha unido con la
              revista digital elguche.com para crear una experiencia culinaria
              única que celebra las tradiciones de Turrialba.
            </p>

            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 font-inter-semibold fade-in-right ${
                isVisible ? "visible" : ""
              }`}
            >
              Esta colaboración nace del amor por la gastronomía costarricense y
              el compromiso de apoyar a los productores locales, destacando
              ingredientes autóctonos en recetas innovadoras.
            </p>

            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-700 font-inter-semibold fade-in ${
                isVisible ? "visible" : ""
              }`}
            >
              El Sándwich Turrialba, creación de la chef María Alicia Mena,
              representa la fusión perfecta entre tradición e innovación,
              utilizando productos frescos de la región.
            </p>
          </div>

          <div
            className={`w-full lg:w-1/2 fade-in-top ${
              isVisible ? "visible" : ""
            }`}
          >
            <img
              src="https://media.istockphoto.com/id/2182151106/photo/mother-and-daughter-cooking-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=aaMDNoqjZlCwg55ULYqGKaPBQ0HgI0sU5DARAu_Wqtg="
              alt="Una persona está preparando sándwiches en una cocina. Se ven los ingredientes: lechuga, pepino, tomate y jamón."
              className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};
