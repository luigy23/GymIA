import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-QUMg6IrzL8f2McFN3qmo4TqY"
    ,
    apiKey: process.env.NEXT_PUBLIC_OPEN_IA_APIKEY,
});
const openai = new OpenAIApi(configuration);

//creacmos una funcion para exportar
export const completar = async (mensajesActualizados) => {
        
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: mensajesActualizados,
          });
          const respuesta = completion.data.choices[0].message.content;
            return respuesta;
    
}; // para importar esta funcion en otro archivo se debe usar el siguiente codigo
// import { completar } from "./openai";


export default openai;

