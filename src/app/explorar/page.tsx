'use client'
import { useState } from "react";
import Header from "@/component/header/Header";
import { infoData, Info } from "../explorar/infosData";
import { Exp, infoExp } from "./infosExp";

export default function Explorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  // Filtro condicional
  const filteredExp = selectedCategory === 'Todas'
    ? infoExp
    : infoExp.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Header />

      <main>
        {/* hero */}
        <section className="flex flex-col justify-center items-center mt-40 mb-10 text-blue-100 text-center px-4">
          <h1 className="text-2xl sm:text-4xl mb-6">Exploração Espacial</h1>
          <p className="text-base sm:text-xl max-w-3xl">
            Descubra os marcos da exploração espacial e as missões que expandiram nosso conhecimento sobre o universo.
          </p>
        </section>

        {/* Filtros */}
        <section className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-5 mb-10 max-w-5xl mx-auto px-4">
          {infoData.map((info: Info) => (
            <button
              key={info.id}
              onClick={() => setSelectedCategory(info.name)}
              className={`rounded-xl p-2 text-center text-sm sm:text-base md:text-lg lg:text-xl flex items-center justify-center transition-all duration-200 cursor-pointer
                ${selectedCategory === info.name
                  ? 'bg-blue-950 text-white scale-105 shadow-lg'
                  : 'bg-slate-800 text-white hover:bg-blue-950 hover:scale-105 hover:shadow-md'}`}
            >
              {info.name}
            </button>
          ))}
        </section>

        {/* Descobertas */}
        <section>
          {filteredExp.map((info: Exp) => (
            <div
              key={info.id}
              className="bg-blue-950 text-blue-100 rounded-lg p-4 px-7 mb-14 mx-5 md:mx-20 lg:mx-60 flex flex-col md:flex-row md:justify-between md:items-center transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Texto */}
              <div className="flex flex-col md:gap-2 md:w-[60%]">
                <h2 className="text-2xl mb-2">{info.name}</h2>
                <p className="text-sm mb-1 opacity-80">{info.date}</p>
                <p className="text-base">{info.description}</p>
              </div>

              {/* Imagem */}
              <img
                src={info.image}
                alt={info.name}
                className="w-full h-auto md:h-70 mt-5 rounded-md md:mt-0 md:w-[35%] object-cover"
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
