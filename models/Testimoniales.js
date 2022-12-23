import { Sequelize } from "sequelize";  
import db from "../config/db"; // importamos la conexion a la base de datos

export const Testimonial = db.define('testimoniales', { // definimos el modelo de la tabla viajes
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: { 
        type: Sequelize.STRING
    }

}); // definimos el modelo de la tabla viajes
