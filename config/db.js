import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config'; //importar dotenv para las variables de entorno

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false

});

export default db;