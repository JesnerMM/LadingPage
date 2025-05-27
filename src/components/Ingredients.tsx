import React from "react";

const ingredients = [
  {
    name: "Queso Turrialba Dos Pinos",
    amount: "1/4 taza en cubitos",
    image:
      "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Varios trozos irregulares de queso parmesano están apilados sobre una pizarra oscura, junto a granos de granada rojos esparcidos. Al fondo, borrosos, se aprecian una copa de vino y una botella de vino blanco.",
  },
  {
    name: "Aguacate",
    amount: "1/2 en cubitos",
    image:
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Un aguacate cortado por la mitad, con una mitad mostrando el hueso grande y la otra mitad el hueco, ambas con pulpa verde amarillenta, sobre un fondo blanco liso.",
  },
  {
    name: "Tomate",
    amount: "1/4 taza en cubitos",
    image:
      "https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Una vista cercana de una gran cantidad de tomates rojos maduros con tallos verdes, apiñados en un cesto, siendo exhibidos en el mercado.",
  },
  {
    name: "Aceite de oliva",
    amount: "1/2 cucharadita",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Una jarra de vidrio transparente llena de aceite de oliva amarillo-verdoso, sellada con un corcho, se alza sobre una superficie oscura y texturizada. A su lado, se agrupan varias aceitunas verdes y moradas, y ramas de olivo se extienden por el fondo.",
  },
  {
    name: "Sal y pimienta",
    amount: "Al gusto",
    image: "https://carmencita.com/shop/1731-large_default/pimienta-sal.jpg",
    alt: "Una toma aérea de un montón de granos de pimienta negra enteros mezclados con cristales gruesos de sal marina blanca, sobre un fondo blanco liso.",
  },
  {
    name: "Alfalfa",
    amount: "1 taza lavada",
    image:
      "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/06/14/los-brotes-de-alfalfa-son-clave-contra-la-menopausia-1.jpeg",
    alt: "Manos sosteniendo un tazón de cerámica lleno de brotes de alfalfa de color verde claro y blanco.",
  },
  {
    name: "Queso crema Dos Pinos",
    amount: "2 cucharadas",
    image:
      "https://walmartcr.vtexassets.com/arquivos/ids/880679/11491_02.jpg?v=638762145758500000",
    alt: "Un envase de plástico de queso crema Dos Pinos, con el logo verde de la marca y la etiqueta 'Queso Crema original', mostrando detalles como 'Rico Sabor' y 'Peso Neto 210g', sobre un fondo blanco.",
  },
  {
    name: "Albahaca",
    amount: "2 hojas picadas",
    image:
      "https://images.unsplash.com/photo-1527964105263-1ac6265a569f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Foto tomada desde arriba de un conjunto de hojas de Albahaca de color verde oscuro que cubren todo el fondo de la imagen",
  },
  {
    name: "Pan integral",
    amount: "4 rebanadas",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Tres Rebanadas de pan integral sobre un fondo rústico con una rama de trigo encima dando a entender que el pan está hecho de trigo",
  },
];

export const Ingredients = () => {
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
    `}</style>

      <section
        id="ingredients"
        className="w-full bg-gradient-to-b from-green-50 to-white py-16 md:py-24"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair-bold text-green-800 mb-4">
              Ingredientes
            </h2>
            <p className="text-lg text-gray-700 font-inter-semibold max-w-2xl mx-auto">
              Estos ingredientes frescos y locales son la base del auténtico{" "}
              <span className="font-playfair-bold">Sándwich Turrialba</span>.
              Cada uno aporta un sabor único a esta deliciosa creación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={ingredient.image}
                    alt={ingredient.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-playfair-bold text-green-700 mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-600 font-inter-semibold">
                    {ingredient.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
