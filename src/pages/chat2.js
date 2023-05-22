import React, { useState } from "react";
import estilo from "../styles/chat.module.css";
import { getUsuario, crearUsuario } from "@/Services/usuario";

const Chat2 = () => {

  const [usuario, setUsuario] = useState("");

  const clickboton = async() => {
    const respuesta = await getUsuario(3);
    setUsuario(respuesta.data);
    console.log(respuesta);
  }

  const clickboton2 = async() => {
    const respuesta = await crearUsuario();
    console.log(respuesta);
  }

  

  return (
    <div className={estilo.Main}>
      <h1>{usuario.nombreUsuario}</h1>
      <p>{usuario.alturaCm}</p>

      <button onClick={clickboton}
      >traer usuarios</button>
      <button onClick={clickboton2}>Crear usuario</button>
    </div>
  );
};

export default Chat2;
