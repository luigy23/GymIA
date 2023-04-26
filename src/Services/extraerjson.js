//funcion para extraer de un texto un json

export const extraerjson = (jsonMensaje) => {
  const jsonString = jsonMensaje;
  const jsonObject = JSON.parse(
    jsonString.substring(
      jsonString.indexOf("{"),
      jsonString.lastIndexOf("}") + 1
    )
  );
  console.log(jsonObject);
  return jsonObject;
};
