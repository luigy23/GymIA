import Image from "next/image";

import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import { completar } from "../Services/openia";
import Rutina from "../Componentes/Rutina";
import Spinner from "../Componentes/Spinner";
import { extraerjson, extraerTexto } from "../Services/extraerjson";
import { UserContext } from "@/Context/UserContext";
import estilo from "../styles/chat.module.css";



//importar est

export default function Home() {
  const { user, updateRutina } = useContext(UserContext);
  const cargando = useRef(false);
  const [texto, setTexto] = useState("");
  const [mensajes, setMensajes] = useState([
    {
      role: "system",
      content: `te llamas jimbo eres un entrenador personal con 20 años de experiencia, que hace rutinas personalizadas
      según la información del usuario, siempre harás la preguntas necesarias para poder dar la rutina perfecta para cada usuario. además también eres un nutriólogo, eres breve y conciso en tus respuestas. Tu objetivo es crear una rutina personalizada
       en base a la información que el usuario te da. Además de usar tus conocimientos para dar consejos y recomendaciones.
       tienes que buscar lo mejor para el usuario en cuanto a salud y decirle al usuario cuando no está haciendo bien las cosas.
       Habilidades:
      Crear una rutina: Cuando vayas a crear una rutina personalizada deberás darla en el siguiente formato, sin comentarios o cosas extras solo tendrás que responder con esto: /*JSON{"objetivo":"string","rutina":[{"dia":"string","ejercicios":[{"nombre":"string","series":"number","repeticiones":"string","peso":"string"}]}]} */
      <Comentario Extra>
      Primera indicación:
                actúa como un excelente entrenador personal recuerda siempre hacer la preguntas correctas para tener información y poder generar las mejores rutinas, recuerda que eres breve conciso y carismático, lo primero que harás es saludar:
      `,
    },
  ]);
  const formulario = useRef(null);
  const rutinaPlantilla = useRef({
    objetivo: "string",
    rutina: [
      {
        dia: "string",
        ejercicios: [
          {
            nombre: "string",
            series: "number",
            repeticiones: "string",
            peso: "string",
          },
        ],
      },
    ],
  });


  const traerUsuario = async () => {
    try {
      const respuesta = await axios.get("/api/usuario");
      if (respuesta.data == "") {
        throw new Error("no hay usuario");
      }
      setMensajes((mensajesAnteriores) => [
        ...mensajesAnteriores,
        {
          role: "user",
          content: `esta es mi información en formato JSON: ${JSON.stringify(
            respuesta.data
          )}, usala para conocerme y hacer mi experiencia de manera personalizada.`,
        },

      ]);
    } catch (error) {
      console.log(error);
      setMensajes((mensajesAnteriores) => [
        ...mensajesAnteriores,
        {
          role: "user",
          content: `esta es mi información en formato JSON: ${JSON.stringify(
            user
          )}, usala para conocerme y hacer mi experiencia de manera personalizada.`,
        },
      ]);
    }
  };

  useEffect(() => {
    traerUsuario();
  }, []);

  const handleSubmit = (e) => {
    formulario.current.reset();
    e.preventDefault();
    enviarMensaje();
  };

  const enviarMensaje = async (textoMsj = texto) => {
    cargando.current = true;
    setMensajes((mensajesAnteriores) => [
      ...mensajesAnteriores,
      { role: "user", content: textoMsj },
    ]);
    const mensajesActualizados = [
      ...mensajes,
      { role: "user", content: textoMsj },
    ];
    const respuesta = await completar(mensajesActualizados);
    cargando.current = false;
    if (respuesta.includes("{")) {
      console.log("hay json");
      const rutina = extraerjson(respuesta);
      rutinaPlantilla.current = rutina;
      updateRutina(rutina);
      setMensajes((mensajesAnteriores) => [
        ...mensajesAnteriores,
        { role: "system", content: extraerTexto(respuesta) },
      ]);
      alert("se genero la rutina");
    } else {
      setMensajes((mensajesAnteriores) => [
        ...mensajesAnteriores,
        { role: "system", content: respuesta },
      ]);

      console.log("mensajes:", mensajes);
      setTexto("");
    }
  };

  const generarRutina = async () => {
    const mensajeGenerar = `generame la rutina`;
    enviarMensaje(mensajeGenerar);
  };

  return (
    <>
      <div className={estilo.Main}>

      <div className={estilo.divChat}>
      <div className={estilo.headerChat}>
          <h1 className="text-white text-2xl">Chat</h1>
        </div>
      
     
        
        {/* Mensjaes */}
        <div className={estilo.mensajesContainer}>
          {mensajes.map((mensaje, index) => {
            //no mostrar el primer mensaje del sistema, que es la descripción del chatbot
            if (index <2) {
              return null;
            }
            if(mensaje.role == "system"){
              return (
                <div key={index}  className={estilo.mensajeBot}>
                <div className={estilo.mensaje}>
                    {mensaje.content}
                </div>
              </div>
              )
            
            }
            if(mensaje.role == "user"){
              return(
              <div key={index} className={estilo.mensajePropio}>
              <div className={estilo.mensaje}>
                  {mensaje.content}
                  
              </div>
            </div>)
            }
          })}
          <div className={cargando.current ? "block" : "hidden"}>
            <Spinner />
          </div>
        </div>

        {/* formulario */}
        <div className={estilo.inputContainer}>
        <form
          ref={formulario}
          onSubmit={(e) => handleSubmit(e)}
          className="flex gap-4 p-2 w-full justify-center items-center "
        >
          <input
            className={estilo.input} placeholder="Escribe un mensaje"
            onChange={(e) => setTexto(e.target.value)}
          />

          <button
            type="sumbit"
            className="bg-shamrock-500 text-white rounded-lg px-3 py-2"
          >
            Enviar
          </button>
          <button
            type="button"
            onClick={(e) => generarRutina(e)}
            className="bg-teal-500 text-white rounded-lg px-3 py-2"
          >
            Generar rutina
          </button>
        </form>
        </div> 
        </div>
      </div>
     
    </>
  );
}
