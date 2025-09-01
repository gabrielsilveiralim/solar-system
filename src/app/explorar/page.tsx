import Header from "@/component/header/Header";


export default function Explorer(){

    return(
        <>
        <Header />

        <main>
        
        <section className="flex flex-col justify-center items-center mt-40 text-blue-100 ">
            <h1 className="text-2xl sm:text-4xl mb-5">Exploração Espacial</h1>
            <p className="text-base sm:text-xl mr-4 ml-4">Descubra os marcos da exploração espacial e as missões que expandiram nosso conhecimento sobre o universo</p>
        </section>

        <section className="grid grid-cols-3 md:grid-cols-5 gap-5 mt-5 mb-8 sm:mx-auto max-w-5xl mr-4 ml-4  ">
            <div className="bg-slate-700 text-white rounded-xl p-2 text-center text-base md:text-xl md:w-35  lg:text-2xl w-25  flex items-center justify-center ">
                <h2>Todas</h2>
            </div>

            <div className="bg-slate-700 text-white rounded-xl p-2 text-center text-base md:text-xl md:w-35 lg:text-2xl w-25 flex items-center justify-center">
                <h2>Satélites</h2>
            </div>

            <div className="bg-slate-700 text-white rounded-xl p-2 text-center text-base md:text-xl md:w-35 lg:text-2xl w-25 flex items-center justify-center">
                <h2>Tripuladas</h2>
            </div>

            <div className="bg-slate-700 text-white rounded-xl p-2 text-center text-base md:text-xl md:w-35 lg:text-2xl w-25 flex items-center justify-center">
                <h2>Sondas</h2>
            </div>

            <div className="bg-slate-700 text-white rounded-xl p-2 text-center text-base md:text-xl md:w-35 lg:text-2xl w-25 flex items-center justify-center">
                <h2>Telescópio</h2>
            </div>
        </section>



        </main>



        


        </>
    )
}