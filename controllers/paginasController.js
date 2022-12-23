import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const PaginaInicio = async (req,res) => { // req lo que enviamos y express nos responde

    //Consultar 3 viajes del modelo viaje

    const promiseDB =[];
    promiseDB.push(Viaje.findAll({limit: 3})); //limita a 3 viajes
    promiseDB.push(Testimonial.findAll({limit:3}));

    try {
        //const viajes = await Viaje.findAll({limit: 3}); //limita a 3 viajes
        //const testimonios = await Testimonial.findAll({limit:3})
        //solo hacerlas separado cuando una depedne de la otra
        const resultado = await Promise.all(promiseDB); //ejecuta las dos promesas al mismo tiempo y ejecuta las consultas al mismo tiempo
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0], 
            testimonios:resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
}

const PaginaNosotros =(req,res) => {
 
    res.render('nosotros',{
        pagina: 'Nosotros'  //Pasamos la variable viajes a nosotros.pug
    }); //renderizar el archivo nosotros.pug
}

const PaginaViajes = async (req,res) => {

    //Consultar base de datos
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Proximos Viajes', //Pasamos la variable viajes a nosotros.pug
        viajes: viajes    //
    }); //renderizar el archivo nosotros.pug
}

const PaginaTestimoniales = async (req,res) => {

    const testimonios = await Testimonial.findAll(); // nos trae todos los testimonios


    try {
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimonios: testimonios

        }); 
    } catch (error) {
        console.log(error);
    }
  
}

//Muestra un viaje por su slug
const PaginaDetalleViaje = async (req,res) => {
    const {slug} = req.params;  //lo que viene en la url (comodin)
    
    try {
        const resultado = await Viaje.findOne({where: {slug: slug}}); //busca el slug en la base de datos
        res.render('infoviaje',{
            pagina: 'Informacion Viaje',
            resultado: resultado
        });
    } catch (error) {
        console.log(error);
    }
        

}

export {
    PaginaInicio,
    PaginaNosotros,
    PaginaViajes,
    PaginaTestimoniales,
    PaginaDetalleViaje
}