//hola mundo de la api de next js

import fs from "fs";
import path from "path";

const usuario = async (req, res) => {
  const jsonData = req.body;

  //si el metodo es get responder con el archivo json
  if (req.method == "GET") {
    try {
      const dataFolderPath = path.join(process.cwd(), "public", "data/");
      const fileName = "usuario.json";

      // crea la carpeta data si no existe
      if (!fs.existsSync(dataFolderPath)) {
        fs.mkdirSync(dataFolderPath); // crea la carpeta
      }

      // lee el archivo json
      const jsonFile = fs.readFileSync(dataFolderPath + fileName, "utf8");

      // envia el archivo json
      res.status(200).json(JSON.parse(jsonFile));
      return;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al leer archivo" });
    }

    
  }

  try {
    const dataFolderPath = path.join(process.cwd(), "public", "data/");
    const fileName = "usuario.json";

    // crea la carpeta data si no existe
    if (!fs.existsSync(dataFolderPath)) {
      fs.mkdirSync(dataFolderPath); // crea la carpeta
    }

    // guarda el archivo json
    fs.writeFileSync(dataFolderPath + fileName, JSON.stringify(jsonData));
    
    res.status(200).json({ message: "Archivo guardado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar archivo" });
  }
};

export default usuario;

