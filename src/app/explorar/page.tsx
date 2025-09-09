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
        <section className="flex flex-col justify-center items-center mt-40 mb-10 text-blue-100">
          <h1 className="text-2xl sm:text-4xl mb-10">Exploração Espacial</h1>
          <p className="text-base sm:text-xl mr-4 ml-4">
            Descubra os marcos da exploração espacial e as missões que expandiram nosso conhecimento sobre o universo
          </p>
        </section>

        {/* Filtros */}
        <section className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-5 mb-15 sm:mx-auto max-w-5xl mr-4 ml-4">
          {infoData.map((info: Info) => (
            <button key={info.id}
              onClick={() => setSelectedCategory(info.name)}
             className='bg-slate-700 text-white rounded-xl p-2 text-center text-base md:text-xl md:w-35 lg:text-2xl w-25 flex items-center justify-center transition duration-200'>
              {info.name}
            </button>
          ))}
        </section>

        {/* Descobertas */}
        <section>
          {filteredExp.map((info: Exp) => (
            <div key={info.id}
              className="bg-blue-950 text-blue-100 rounded-lg p-4 px-7 mb-14 m-5 md:mx-20 lg:mx-60 flex flex-col md:flex-row md:justify-between md:items-center">
              
              {/* Texto */}
              <div className="flex flex-col md:gap-2">
                <h2 className="text-2xl mb-2">{info.name}</h2>
                <p className="text-base">{info.date}</p>
                <p>{info.description}</p>
              </div>

              {/* Imagem */}
              <img src={info.image}
                className="w-full h-auto md:h-70 mt-5 rounded-md md:mt-0 md:w-[35%]" />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
