
function Rutina({ rutina }) {

  const imagenEnGoogle = async (ejercicio) => {
    window.open(`https://www.google.com/search?tbm=isch&q=${ejercicio}`, '_blank');

  }

  return (
    <div className="bg-transparent rounded-lg shadow-lg p-6  flex flex-col items-center  w-full  ">
      <h2 className="text-2xl font-bold mb-4 text-slate-200">
        <span className="text-fercho-500">Objetivo:</span> {rutina.objetivo}
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start ">
      {rutina.rutina.map((dia) => (
        <div key={dia.dia} className="tarjeta">
          <h2 className="titulo">{dia.dia}</h2>
          <ul className="lista gap-2">
            {dia.ejercicios.map((ejercicio) => (
              <li key={ejercicio.nombre} className="ejercicio" onClick={
                () => imagenEnGoogle(ejercicio.nombre) }>
                <h3 className="titulo-ejercicio" >{ejercicio.nombre}</h3>
                {ejercicio.series && (
                  <p className="detalles-ejercicio">
                    Series: {ejercicio.series}
                  </p>
                )}
                {ejercicio.repeticiones && (
                  <p className="detalles-ejercicio">
                    Repeticiones: {ejercicio.repeticiones}
                  </p>
                )}
                {ejercicio.peso && (
                  <p className="detalles-ejercicio">Peso: {ejercicio.peso}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Rutina;
