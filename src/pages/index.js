import React from "react";
import Image from "next/image";
import RobotGym from "../../public/Images/robotGym.png";
import estilo from "../styles/landing.module.css";
import Link from 'next/link';
const Landing = () => {
  return (
    <>

    <div
      className="w-full h-screen bg-smoke-900 flex items-center justify-center 
    flex-col xs:flex-row overflow-hidden relative
    
    "
    >
      <span className={estilo.forma2}></span>
      <span className={estilo.forma}></span>
      <div className={estilo.contenedor}>
        <div className="flex  h-full  flex-col justify-center gap-3 overflow-hidden  ">
          <h1 className="text-2xl md:text-3xl">Crea Tus Rutinas Personalizadas con IA.</h1>
          <p className="text-slate-400 text-start">
            Rutinas impulsadas por chatGPT para que alcances tu objetivos de
            manera rapida y eficiente.
          </p>
          <button className={`${estilo.btnNeon} ${estilo.customBtn}`}>
          <Link href="/Registro"><span>Inicia Ahora</span></Link>
          </button>
        </div>
        <div className=" ">
          <Image src={RobotGym} alt="" />
        </div>
      </div>
    </div>
    <div
      className="w-full h-screen bg-smoke-900 flex items-center justify-center 
    flex-col xs:flex-row overflow-hidden relative
    
    "
    >
      <span className={estilo.forma2}></span>
      <span className={estilo.forma}></span>
      <div className={estilo.contenedor}>
        <div className="flex  h-full  flex-col justify-center gap-3 overflow-hidden  ">
          <h1 className="text-2xl md:text-3xl">Crea Tus Rutinas Personalizadas con IA.</h1>
          <p className="text-slate-400 text-start">
            Rutinas impulsadas por chatGPT para que alcances tu objetivos de
            manera rapida y eficiente.
          </p>
          <button className={`${estilo.btnNeon} ${estilo.customBtn}`}>
          <Link href="/Registro"><span>Inicia Ahoinra</span></Link>
          </button>
        </div>
        <div className=" ">
          <Image src={RobotGym} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;
