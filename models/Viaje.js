import { Sequelize } from "sequelize";  
import db from "../config/db"; // importamos la conexion a la base de datos

export const Viaje = db.define('viajes', { // definimos el modelo de la tabla viajes
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: { 
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }

}); // definimos el modelo de la tabla viajes


