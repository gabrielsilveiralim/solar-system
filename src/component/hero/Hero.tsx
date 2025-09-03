import React from 'react';
import Button from "../button/subButton"
import EarthComponent from '../SolarSystem/SystemTerra/solarSystemTerra'


export default function Hero() {
    return (
    <>
    <section className="relative flex justify-end flex-col text-blue-100 mt-50">
            
            <div className="absolute -top-30 left-5 w-80 h-80 sm:w-2xl sm:h-[400px] sm:-left-10 md:w-3xl md:-left-20 md:h-[500px] lg:-left-10 lg:w-4xl xl:left-0 xl:w-5xl xl:h-[700px] 2xl:w-5xl 2xl:left-10 2xl:-top-40 2xl:h-[800px]">
                <EarthComponent />
            </div>

            <div className="relative z-10 mt-20 mx-auto top-50 left-auto sm:mr-10 md:mr-10 lg:mr-20 xl:mr-30 xl:top-40 xl:jusfity-center xl:items-center ">
                
                <div className="text-end mb-5 ">
                    <h1 className="text-4xl font-semibold sm:text-5xl">Sistema Solar</h1>
                </div>

                <div className="ml-6 mb-5">
                    <p className="text-base text-end font-medium w-86">
                        Explore os mistérios do nosso sistema solar em uma jornada interativa através do espaço
                    </p>
                </div>

                <div className="relative ml-30">
                    <Button />
                </div>
            </div>
            
    </section>
    
    </>
    )
}