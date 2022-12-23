//Configuar express
//const express = require('express'); //importar express sintaxis comon js
import express from 'express'; //importar express sintaxis es6 toca en el package.json poner type: module
import router from './routes/index.js'; //importar el archivo index.js de la carpeta routes
import db from './config/db.js'; //importar la conexion a la base de datos
import dotenv from 'dotenv/config'; //importar dotenv para las variables de entorno



const app = express();

//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));


//Definir el puerto
const port = process.env.PORT || 3000;

//Habilitar pug
app.set('view engine', 'pug'); //configurar pug

//Obtener el año actual
app.use((req,res,next) => { //middleware
    const year = new Date();
    res.locals.actualYear = year.getFullYear(); //pasar el año actual a todas las vistas
    res.locals.nombreSitio = 'Agencia de Viajes'; //pasar el nombre del sitio a todas las vistas
    return next(); //para que continue con la siguiente funcion
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true})); //configurar body parser


//Definir la carpeta publica    
app.use(express.static('public')); //configurar la carpeta publica



//Agregar Router
app.use('/', router); //cuando se ingrese a la ruta principal se va a ejecutar el router


app.listen(port,()=>{ //arranca el servidor
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})

