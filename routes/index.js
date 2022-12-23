import express from 'express';
import { PaginaInicio,PaginaNosotros,PaginaViajes,PaginaTestimoniales,PaginaDetalleViaje} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router(); //creamos un objeto router

router.get('/', PaginaInicio);

router.get('/nosotros',PaginaNosotros );

router.get('/viajes', PaginaViajes );

router.get('/viajes/:slug', PaginaDetalleViaje );

router.get('/testimoniales', PaginaTestimoniales); //carga la pagina

router.post('/testimoniales', guardarTestimonial); //enviar info POST


export default router;