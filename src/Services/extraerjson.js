//funcion para extraer de un texto un json
import axios from "axios";
export const extraerjson =  (jsonMensaje) => {
  const jsonString = jsonMensaje;
  const jsonObject = JSON.parse(
    jsonString.substring(
      jsonString.indexOf("{"),
      jsonString.lastIndexOf("}") + 1
    )
  );
  console.log(jsonObject);

  axios.post("/api/rutina", jsonObject).then((res) => {
    console.log(res);
  });
  return jsonObject;
};

//funcion que devuelve el texto sin el json:
export const extraerTexto = (jsonMensaje) => {
  const jsonString = jsonMensaje;
  const jsonObject = JSON.parse(
    jsonString.substring(
      jsonString.indexOf("{"),
      jsonString.lastIndexOf("}") + 1
    )
  );
  console.log(jsonObject);
  const texto = jsonString.replace(JSON.stringify(jsonObject), "");
  console.log(texto);
  return texto;
};
