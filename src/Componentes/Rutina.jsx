
function Rutina({ rutina }) {
  return (
    <div className="bg-smoke-800 rounded-lg shadow-lg p-6   w-full  ">
      <h2 className="text-2xl font-bold mb-4 text-slate-200">
        <span className="text-scooter-400">Objetivo:</span> {rutina.objetivo}
      </h2>
    <div className="grid grid-cols-4 gap-4 items-start">
      {rutina.rutina.map((dia) => (
        <div key={dia.dia} className="tarjeta">
          <h2 className="titulo">{dia.dia}</h2>
          <ul className="lista gap-2">
            {dia.ejercicios.map((ejercicio) => (
              <li key={ejercicio.nombre} className="ejercicio">
                <h3 className="titulo-ejercicio">{ejercicio.nombre}</h3>
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
