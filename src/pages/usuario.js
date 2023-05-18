import React from "react";
import estilos from "../styles/usuario.module.css";
import StrongMan from "@/Icons/StrongMan";
import Coach from "@/Icons/Coach";
import Link from "next/link";

//Dashboard del usuario

const usuario = () => {
  return (
    <div className="gradiente w-full h-screen flex  items-center pt-6 flex-col">
      <h1>
        Bienvenido <span className="text-fercho-400">User</span>
      </h1>

      <div className="w-full flex flex-wrap justify-center items-center gap-4">
        <Link href="/chat">
        <div className={`${estilos.tarjeta} bg-scooter-200`}>
          <h3 className="font-bold">Objetivos:</h3>
          <ul className="text-base">
            <li>Objetivo 1</li>
            <li>Objetivo 2</li>
          </ul>
        </div>
        </Link>
        <Link href="/rutina">
        <div className={`${estilos.tarjeta}  bg-fercho-200 `}>

          <StrongMan className="w-10 h-10 "/>

          <h3 className="font-semibold ">Ver tu rutina</h3>
        </div>
        </Link>

        <Link href="/chat">
        <div className={`${estilos.tarjeta} bg-scooter-200`}>
          <Coach className="w-10 h-10 "/>
          <h3 className="font-semibold ">Hablar con el Entrenador</h3>

        </div>
        </Link>
      </div>
    </div>
  );
};

export default usuario;
