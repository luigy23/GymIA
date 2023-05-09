import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios';
import React, { useEffect, useRef, useState, useContext } from "react";
import { completar } from "../Services/openia"
import Rutina from "../Componentes/Rutina";
import Spinner from "../Componentes/Spinner";
import { extraerjson } from '../Services/extraerjson';
import { UserContext } from '@/Context/UserContext';


const inter = Inter({ subsets: ['latin'] }) 
//importar est

export default function Home() {
  
  const [user, setUser] = useState(null);
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
    }
   

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
    const respuesta = await axios.get("/api/usuario");
    setUser(respuesta.data);
    setMensajes((mensajesAnteriores) => [
      ...mensajesAnteriores,
      { role: "user", content: `esta es mi información en formato JSON: ${JSON.stringify(respuesta.data)}, usala para conocerme y hacer mi experiencia de manera personalizada.` },
    ]);


    console.log(respuesta.data);
  };

  useEffect(() => {
    traerUsuario();

  }, [])
  
  const handleSubmit = (e) => {
    formulario.current.reset();
    e.preventDefault();
    enviarMensaje();
   
  };

  const enviarMensaje = async (textoMsj=texto) => {
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
      rutinaPlantilla.current = extraerjson(respuesta);
    }
    setMensajes((mensajesAnteriores) => [
      ...mensajesAnteriores,
      { role: "system", content: respuesta },
    ]);
    console.log("mensajes:", mensajes);
   setTexto("")
  };


  const generarRutina = async () => {
    const mensajeGenerar = `generame la rutina`;
    enviarMensaje(mensajeGenerar);


  };





  return (
<>
    <div className="contenedorPrincipal gap-3 overflow-scroll noScrollBar ">
      <h1 className="text-white">Fitnow</h1>
      <div className="bg-black text-white rounded-lg text-center w-full overflow-y-scroll p-10">
        {mensajes.map((mensaje, index) => {
          //no mostrar el primer mensaje del sistema, que es la descripción del chatbot
          if (index < 1) {
            return null;
          }

          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-2 text-left whitespace-pre-wrap">
                <span className="text-shamrock-500">{mensaje.role}:</span>
                <span>{mensaje.content}</span>
              </div>
            </div>
          );
        })}
        <div className={ cargando.current ? "block" : "hidden"}>
          <Spinner />
        </div>
      </div>

      <form
      ref={formulario}
        onSubmit={(e) => handleSubmit(e)}
        className="flex gap-4 pb-5 w-full justify-center"
      >
        <input
          type="text"
          className="bg-black text-white rounded-lg p-2 w-4/5"

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
          onClick={(e) => generarRutina(e) }
          className="bg-teal-500 text-white rounded-lg px-3 py-2"
        >
          Generar rutina
        </button>
      </form>
    
    </div>
    <Rutina rutina={rutinaPlantilla.current} />
    </>
  )
}
