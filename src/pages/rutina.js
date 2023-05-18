import React, { useEffect, useState } from 'react'
import Rutina from '@/Componentes/Rutina'
import axios from 'axios'




const RutinaUser = () => {

const [rutina, setRutina] = useState(null)

const traerRutina = async () => {
    const respuesta = await axios.get("http://localhost:3000/api/rutina");
    console.log(respuesta);
    setRutina(respuesta.data);
    };




useEffect(() => {
    traerRutina();
}, [])


  return (
    <div className="gradiente w-full min-h-screen flex  items-center pt-6 flex-col">
{
    rutina ? <Rutina rutina={rutina}/> : <h1 className="text-white">Cargando...</h1>
}
    </div>
  )
}

export default RutinaUser