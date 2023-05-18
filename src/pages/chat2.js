import React from "react";
import estilo from "../styles/chat.module.css";

const chat2 = () => {
  return (
    <div className={estilo.Main}>
      <div className={estilo.divChat}>
        <div className={estilo.headerChat}>
          <h1 className="text-white text-2xl">Chat</h1>
        </div>
        <div className={estilo.mensajesContainer}>
          <div className={estilo.mensajeBot}>
            <div className={estilo.mensaje}>
                hola
            </div>
          </div>
          <div className={estilo.mensajePropio}>
            <div className={estilo.mensaje}>
                hola holahol
                
            </div>
          </div>
            {/*  */}
            
        </div>
        <div className={estilo.inputContainer}>
            <input type="text" className={estilo.input} placeholder="Escribe un mensaje"/>
            <button className={estilo.boton}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default chat2;
