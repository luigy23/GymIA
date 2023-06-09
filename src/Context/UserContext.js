import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // añadiendo el estado de la rutina:
  const [Rutina, setRutina] = useState(null);
  const updateRutina = (rutina) => {
    setRutina(rutina);
  };

  const [user, setUser] = useState({
    nombre: "",
    altura: "",
    edad: "",
    peso: "",
    genero: "",
    nivel: "",
    gym: "",
    objetivo: [],
    otros: "",
  });

  const updateUser = ({ nombre, edad, altura, peso, genero, nivel, gym, objetivo, otros }) => {
    setUser({
      nombre: nombre || user.nombre,
      edad: edad || user.edad,
      altura: altura || user.altura,
      peso: peso || user.peso,
      genero: genero || user.genero,
      nivel: nivel || user.nivel,
      gym: gym || user.gym,
      objetivo: objetivo || user.objetivo,
      otros: otros || user.otros,
    });
    console.log("user actualizado");

  };

  const state = {
    user,
    updateUser,
    Rutina,
    updateRutina,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};