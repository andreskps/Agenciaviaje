import { Testimonial } from "../models/Testimoniales";


const guardarTestimonial = async (req, res) =>{ //el name en html es lo que obtiene los datos

    //Validar que todos los campos esten llenos
    const {nombre, email, mensaje} = req.body; //obtener los datos del formulario

    const errores= []; // guardara los mensajes de error para mostrarlos a la vista

    if (nombre.trim() === '') {
       errores.push( {mensaje :'Nombre Vacio'});
    }
    if (email.trim() === '') {
        errores.push( {mensaje :'Email Vacio'});
    }
    if (mensaje.trim() === '') {
        errores.push( {mensaje :'Mensaje Vacio'});
    }

    //Revisar por errores
    if (errores.length > 0) { //Almenos hay un error
        //Muestra la vista con errores

        const testimonios = await Testimonial.findAll(); // nos trae todos los testimonios
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores,
            nombre, //Mandamos las variables para colocarlas en un value y no se pierda el formulario
            email,
            mensaje,
            testimonios: testimonios
        })

    }else{  //Si no hay errores lo almacenamos en la base de datos
       
        try {
            await Testimonial.create({ //guarda en la base de datos
                nombre,
                email,
                mensaje
            });
            res.redirect('/testimoniales'); //redirecciona a testimoniales
            
        } catch (error) {
            console.log(error);
        }

    }

}
    
export {
    guardarTestimonial
}