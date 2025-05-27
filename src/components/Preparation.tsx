import React, { useEffect, useRef, useState } from "react";

type Step = {
  image: string;
  description: JSX.Element;
  title: string;
  alt: string;
};

const steps: Step[] = [
  {
    title: "Tostar el pan",
    description: (
      <>Tostar ligeramente las rebanadas de pan integral (opcional)</>
    ),
    image:
      "https://content.nationalgeographic.com.es/medio/2023/01/25/pan_eaa0a083_539828104_230125173612_1280x842.webp",
    alt: "Dos rebanadas de pan tostado dorado y ligeramente quemado asomándose de una tostadora de color crema claro.",
  },
  {
    title: "Preparar la base",
    description: <>Untar cada rebanada con queso crema Dos Pinos</>,
    image:
      "https://img.freepik.com/fotos-premium/saboree-riqueza-pan-integral-rebanado-deliciosa-pasta-untar-sobre-fondo-madera-rustica_844495-466.jpg",
    alt: "Dos rebanadas de pan oscuro untadas con paté, junto a un frasco de vidrio con paté y un cuchillo de mantequilla.",
  },
  {
    title: "Agregar alfalfa",
    description: <>Colocar una capa de hojas de alfalfa</>,
    image:
      "https://images.squarespace-cdn.com/content/v1/5dc30cbda2d4e36f73f0e4f0/1580406986896-AE5JKQ9FDZ1Q5NZKEFYD/Germinar+alfalfa.jpg",
    alt: "Tazón de vidrio transparente lleno de brotes de alfalfa frescos.",
  },
  {
    title: "Añadir tomate",
    description: <>Agregar rodajas de tomate fresco</>,
    image:
      "https://imag.bonviveur.com/lechuga-y-tomate-para-el-sandwich-blt.jpg",
    alt: "Sándwich con lechuga y tomate en un plato blanco.",
  },
  {
    title: "Preparar mezcla",
    description: (
      <>
        Colocar la mezcla de queso Turrialba, aguacate, sal, pimienta y aceite
        de oliva
      </>
    ),
    image: "https://i.blogs.es/71937a/mezcla/650_1200.jpg",
    alt: "Tazón blanco con mezcla de queso Turrialba, aguacate y condimentos.",
  },
  {
    title: "Añadir mezcla",
    description: (
      <>Agregar una cucharada generosa de la mezcla sobre los ingredientes</>
    ),
    image:
      "https://recetasdecocina.elmundo.es/wp-content/uploads/2024/01/receta-sandwich-atun.jpg",
    alt: "Rebanada de pan blanco cubierta con mezcla cremosa.",
  },
  {
    title: "Finalizar",
    description: (
      <>Finalizar con una lámina de aguacate y decorar con albahaca</>
    ),
    image:
      "https://www.calidadpascual.com/wp-content/uploads/2022/10/bdefe8479d6ee69f7a70a4801596f33d.jpeg",
    alt: "Sándwich decorado con aguacate y albahaca fresca.",
  },
];

export const Preparation = () => {
  const [visibleSteps, setVisibleSteps] = useState<Record<number, boolean>>({});
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility: Record<number, boolean> = {};
        entries.forEach((entry) => {
          const indexStr = entry.target.getAttribute("data-index");
          if (indexStr !== null) {
            const index = parseInt(indexStr, 10);
            updatedVisibility[index] = entry.isIntersecting;
          }
        });
        setVisibleSteps((prev) => ({ ...prev, ...updatedVisibility }));
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      stepRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="preparation" className="py-10 md:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-playfair-bold text-center text-green-800 mb-10">
          Preparación
        </h2>
        <p className="font-inter-semibold text-center text-gray-700 max-w-2xl mx-auto mb-10 px-2">
          Sigue estos sencillos pasos para preparar el auténtico Sándwich
          Turrialba y disfrutar de un sabor único en cada bocado.
        </p>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const visible = visibleSteps[index];

            return (
              <div
                key={index}
                data-index={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`flex flex-col lg:flex-row items-center gap-6 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full lg:w-5/12 max-w-lg aspect-[4/3] overflow-hidden rounded-xl shadow-lg ${
                    visible ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="w-full flex justify-center items-center lg:w-2/12">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-base md:text-lg">
                    {index + 1}
                  </div>
                </div>

                <div
                  className={`w-full lg:w-5/12 px-4 lg:px-0 ${
                    visible ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-playfair-bold text-green-700 mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 font-inter-semibold text-sm md:text-base text-center lg:text-left leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
