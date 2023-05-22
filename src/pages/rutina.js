import React, { useEffect, useState } from 'react'
import Rutina from '@/Componentes/Rutina'
import axios from 'axios'
import Link from 'next/link'
import { UserContext } from "@/Context/UserContext";




const RutinaUser = () => {

//traer rutina del context:
const { Rutina, updateRutina } = useContext(UserContext);

const [rutina, setRutina] = useState(null)

const traerRutina = async () => {
  try {
    const respuesta = await axios.get("http://localhost:3000/api/rutina");
    console.log(respuesta);
    if (respuesta.data==""){
      throw new Error("no hay usuario");
      alert("no hay rutina")
    }
    setRutina(respuesta.data);
  
    }
  catch (error) {
    console.log(error);
    setRutina(Rutina);
  }
}
    
    




useEffect(() => {
    traerRutina();
}, [])


  return (
    <div className="gradiente w-full min-h-screen flex  items-center pt-6 flex-col">
      <h3 className='text-gray-400'>Esta es tu rutina, recuerda que si quieres cambiarla o tienes alguna pregunta puedes decirselo al 
        <Link
          href="/chat"
          className="text-fercho-400"
        
        > entrenador</Link> </h3>
{
    rutina ? <Rutina rutina={rutina}/> : <h1 className="text-white">Cargando...</h1>
}
    </div>
  )
}

export default RutinaUser