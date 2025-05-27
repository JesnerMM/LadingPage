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

        .fade-in {
          opacity: 0;
          transform: translateY(120px);
          transition: all 1.5s ease-in-out;
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-120px);
          transition: all 1.5s ease-in-out;
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(120px);
          transition: all 1.5s ease-in-out;
        }

        .fade-in-top {
          opacity: 0;
          transform: translateY(-120px);
          transition: all 1.5s ease-in-out;
        }

        .visible {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="about"
        className="w-full bg-gradient-to-b from-green-50 to-white py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div
              className={`w-full lg:w-1/2 fade-in-top ${
                isVisible ? "visible" : ""
              }`}
            >
              <img
                src="https://media.istockphoto.com/id/2182151106/photo/mother-and-daughter-cooking-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=aaMDNoqjZlCwg55ULYqGKaPBQ0HgI0sU5DARAu_Wqtg="
                alt="Una persona está preparando sándwiches en una cocina. Se ven los ingredientes: lechuga, pepino, tomate y jamón. En primer plano hay un plato con rodajas de pepino y tomate."
                className="rounded-lg shadow-lg w-full h-auto max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-10">
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl text-green-800 mb-5 font-playfair-bold fade-in-left ${
                  isVisible ? "visible" : ""
                }`}
              >
                Sobre Nosotros
              </h2>

              <p
                className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 font-inter-semibold fade-in-left ${
                  isVisible ? "visible" : ""
                }`}
              >
                Don Pepe, fotógrafo y aventurero gastronómico, se ha unido con
                la revista digital elguche.com para crear una experiencia
                culinaria única que celebra las tradiciones de Turrialba.
              </p>

              <p
                className={`text-base sm:text-lg md:text-xl text-gray-700 mb-4 font-inter-semibold fade-in-right ${
                  isVisible ? "visible" : ""
                }`}
              >
                Esta colaboración nace del amor por la gastronomía costarricense
                y el compromiso de apoyar a los productores locales, destacando
                ingredientes autóctonos en recetas innovadoras.
              </p>

              <p
                className={`text-base sm:text-lg md:text-xl text-gray-700 font-inter-semibold fade-in ${
                  isVisible ? "visible" : ""
                }`}
              >
                El Sándwich Turrialba, creación de la chef María Alicia Mena,
                representa la fusión perfecta entre tradición e innovación,
                utilizando productos frescos de la región.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
