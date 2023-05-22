import axios from "axios";

const API_URL = "http://172.16.72.177:8088/api/v1/usuarios";

export const getUsuario = (id) => {
    return axios.get(API_URL+"/"+id);
    }


    

export const crearUsuario = (usuario) => {
    const otrouser = {
        "idUsuario": "3",
        "nombreUsuario": "luigy23",
        "fechaNacimiento": "2004-03-04",
        "genero": "Hombre",
        "correoElectronico": "luigy@gmail.com",
        "contrasena": "1234",
        "alturaCm": "171",
        "pesoKg": "60.5",
        "nivelActividad": "Intermedio",
        "fechaRegistro": "2023-05-12",
        "edad": "19",
        "lugarEntrenamiento": "Casa"
    }
    return axios.post(API_URL, otrouser);
    }
