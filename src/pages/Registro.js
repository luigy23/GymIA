//componente

import { useState, useContext } from "react";
import estilo from "../styles/formulario.module.css";
import { UserContext } from "@/Context/UserContext";
import NavMenu from "@/Componentes/NavMenu";
import React from "react";
import axios from "axios";
const Registro = () => {
  const [form, setForm] = useState({
    nombre: "",
    altura: "",
    edad: "",
    peso: "",
    genero: "",
    nivel: "",
    lugarEntrenamiento: "",
    objetivo: [],
    otros: "",
  });
  const { updateUser, user } = useContext(UserContext);
  const [step, setStep] = useState(0);
  const handleChange = (e) => {
    if (e.target.type == "checkbox") {
      if (e.target.checked) {
        setForm({
          ...form,
          [e.target.name]: [...form[e.target.name], e.target.value],
        });
      } else {
        setForm({
          ...form,
          [e.target.name]: form[e.target.name].filter(
            (item) => item != e.target.value
          ),
        });
      }
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    console.log(form);
  };
  const handleSubmit = async(e) => {
    console.log("enviando");
    e.preventDefault();
    try {
    const respuesta = await axios.post("/api/usuario", form);
    console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
    updateUser(form);
  };
  const infoGym = (
    <>
      <label>
        Genero:
        <div className="flex gap-2">
          <label
            className={
              form.genero == "hombre"
                ? `${estilo.opcion_nivel} ${estilo.opcionActiva}`
                : estilo.opcion_nivel
            }
          >
            Hombre
            <input
              type="radio"
              name="genero"
              value="hombre"
              onChange={handleChange}
            />
          </label>
          <label
            className={
              form.genero == "mujer"
                ? `${estilo.opcion_nivel} ${estilo.opcionActiva}`
                : estilo.opcion_nivel
            }
          >
            Mujer
            <input
              type="radio"
              name="genero"
              value="mujer"
              onChange={handleChange}
            />
          </label>
        </div>
      </label>
      <label>
        Donde entrenas:
        <div className="flex gap-2">
          <label
            className={
              form.lugarEntrenamiento == "casa"
                ? `${estilo.opcion_nivel} ${estilo.opcionActiva}`
                : estilo.opcion_nivel
            }
          >
            Casa
            <input
              type="radio"
              name="lugarEntrenamiento"
              value="casa"
              onChange={handleChange}
            />
          </label>
          <label
            className={
              form.lugarEntrenamiento == "gym"
                ? `${estilo.opcion_nivel} ${estilo.opcionActiva}`
                : estilo.opcion_nivel
            }
          >
            Gym
            <input
              type="radio"
              name="lugarEntrenamiento"
              value="gym"
              onChange={handleChange}
            />
          </label>
        </div>
      </label>
      <label>
        Nivel:
        <div className="flex gap-2">
          <label
            className={
              form.nivel == "principiante"
                ? `${estilo.opcion_nivel} ${estilo.opcionActiva}`
                : estilo.opcion_nivel
            }
          >
            Principiante
            <input
              type="radio"
              name="nivel"
              value="principiante"
              onChange={handleChange}
            />
          </label>
          <label
            className={
              form.nivel == "intermedio"
                ? `${estilo.opcion_nivel} ${estilo.opcionActiva}`
                : estilo.opcion_nivel
            }
          >
            Intermedio
            <input
              type="radio"
              name="nivel"
              value="intermedio"
              onChange={handleChange}
            />
          </label>
          <label
            className={
              form.nivel == "avanzado"
                ? `${estilo.opcion_nivel} ${estilo.opcionActiva}`
                : estilo.opcion_nivel
            }
          >
            Avanzado
            <input
              type="radio"
              name="nivel"
              value="avanzado"
              onChange={handleChange}
            />
          </label>
        </div>
      </label>
    </>
  );
  const infoPersonal = (
    <>
      <label>
        Nombre:
        <input
          type="text"
          placeholder="Juan Perez"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Edad:
        <input
          type="text"
          name="edad"
          value={form.edad}
          onChange={handleChange}
          placeholder="20"
        />
      </label>
      <div className="flex gap-4">
        <label>
          Altura:
          <input
            type="text"
            name="altura"
            value={form.altura}
            onChange={handleChange}
            placeholder="180 cm"
          />
        </label>
        <label>
          Peso:
          <input
            type="text"
            name="peso"
            value={form.peso}
            onChange={handleChange}
            placeholder="80 kg"
          />
        </label>
      </div>
    </>
  );
  const infoObjetivo = (
    <>
      <label>
        objetivos:
        <span>
          {form.objetivo.map((item, index) => {
            return <span key={index}>{item},</span>;
          })}{" "}
        </span>
        <div className={estilo.objetivos}>
          <label
            className={
              form.objetivo.includes("bajar de peso")
                ? `${estilo.objetivo} ${estilo.objetivoActivo}`
                : estilo.objetivo
            }
          >
            <input
              type="checkbox"
              name="objetivo"
              value="bajar de peso"
              onChange={handleChange}
            />
            Bajar de peso
          </label>
          <label
            className={
              form.objetivo.includes("aumentar masa muscular")
                ? `${estilo.objetivo} ${estilo.objetivoActivo}`
                : estilo.objetivo
            }
          >
            <input
              type="checkbox"
              name="objetivo"
              value="aumentar masa muscular"
              onChange={handleChange}
            />
            aumentar masa muscular
          </label>
          <label
            className={
              form.objetivo.includes("tonificar")
                ? `${estilo.objetivo} ${estilo.objetivoActivo}`
                : estilo.objetivo
            }
          >
            <input
              type="checkbox"
              name="objetivo"
              value="tonificar"
              onChange={handleChange}
            />
            Tonificar
          </label>
        </div>
        <div>
          <label className="flex flex-col items-center justify-center">
            otros:
            <input type="text" name="otros" onChange={handleChange} />
          </label>
        </div>
      </label>
    </>
  );
  const steps = [infoPersonal, infoObjetivo, infoGym];
  //usando el contexto del usuario



  return (
    <>
    <div className="w-full items-center justify-start h-screen  flex flex-col text-center gap-3 pt-9 gradiente">
      <div className="max-w-2xl gap-3 flex flex-col p-2">
        <h1 className="font-semibold text-2xl">Cuentanos de ti </h1>
        <p className="text-slate-300">
          
          Para poder generar tu rutina personalizada, necesitamos que nos
          cuentes un poco sobre ti
        </p>
      </div>
      <form onSubmit={handleSubmit} className={estilo.formulario}>
        {steps[step]}
        <div className="flex  items-center gap-2">
          <button
            type="button"
            className={estilo.btnAtras}
            onClick={() => {
              if (step > 0) {
                setStep(step - 1);
              }
            }}
          >
            Atras
          </button>

          {step == 2 ? (
            <>
              <button className={estilo.btnEnviar} type="submit">
                Guardar
              </button>
            </>
          ) : (
       
              <button
                type="button"
                className={estilo.btnSiguiente}
                onClick={() => {
                  if (step < steps.length - 1) {
                    setStep(step + 1);
                  }
                }}
              >
                Siguiente
              </button>
   
          )}
        </div>
      </form>
      {user.nombre}
    </div>
    </>
  );
};

export default Registro;
