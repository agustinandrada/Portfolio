import React, { useState } from "react";

//* Images
import Image from "../assets/mia.png";

//*icons
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

//*type animation
import { TypeAnimation } from "react-type-animation";

//*motion
import { motion } from "framer-motion";

//*variants
import { fadeIn } from "../variants";

//*icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


//*images
import Img1 from "../assets/dg.png";
import Img2 from "../assets/oro.png";
import Img3 from "../assets/neuro.png";
import Img4 from "../assets/dallas.png";
import Img5 from "../assets/ingreso.png";
import Img6 from "../assets/portal.png";


const Projects = () => {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6]; // Rutas de las imágenes
    const nombres = ["DG-Torneos", "Oroquieta-Higieclin", "Neuroeducativa", "Dallas Pool & Bar", "Ingreso Domselaar", "Portal de Noticias"];
    const hipervinculos = ["http://181.118.69.61:8023", "http://oroquieta.cl/public/", "https://sistema.neuroeducativa.cl", "https://dallas-iota.vercel.app", "https://ingresodomselaar.com.ar/estancias/login/", "https://portal.fidelitytools.net"];
    const descripciones = ["Plataforma de reservas de canchas, con integración con la API de SMS y plataforma de pago con Mercado Pago. Tecnologías: Laravel, PHP, Boostrap, Api para envios SMS.",
        "Integración con la API Laudus para gestión de Lotes, producción y facturación. Tecnologías: Laravel, PHP, Postman, Laudus, Tailwin CSS, Mailer.",
        "Plataforma de evaluación docente. Tecnologías: Laravel, PHP, Bootstrap, laravel-excel, DomPDF, ChartJs, Mailer.",
        "Página web para un bar de la ciudad de Santa Fe donde los clientes pueden ver la carta de las comidas y bebidas, hacer reservas e interactuar con el local",
        "Sistema de ingreso a un barrio privado, para ser utilizado por la gente de seguridad, desarrollado con Laravel 11, Bootstrap, PHP",
        "Portal de Noticias y eventos. Tecnologías: Laravel, PHP, Bootstrap, API para climas"];
    images.reverse();
    nombres.reverse();
    hipervinculos.reverse();
    descripciones.reverse();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section id="projects" className="section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <div className="flex-1">
                        <h2 className="h2 text-accent">Proyectos</h2>
                        <h3 className="h3 mb-4">
                            A continuación se muestran algunos de mis proyectos
                        </h3>
                    </div>
                    {/* image */}
                    <div className="flex-1 flex items-center ">
                        <FaChevronLeft className="text-5xl cursor-pointer sm:display-none" onClick={prevImage} />
                    </div>
                    <div className="relative flex-1">
                        <a href={hipervinculos[currentImageIndex]} target="_blank">
                            <motion.div
                                className="bg-top imagen-proyecto"
                                style={{
                                    backgroundImage: `url(${images[currentImageIndex]})`,
                                    backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el contenedor
                                    backgroundPosition: 'center', // Centra la imagen
                                    backgroundRepeat: 'no-repeat', // No repite la imagen
                                    height: "400px", // Ajusta el ancho del contenedor
                                    width: "600px", // Ajusta el ancho del contenedor
                                    borderRadius: '15px', // Ajusta el radio de la imagen
                                }}
                            ></motion.div>
                            {/* Texto que aparecerá al hacer hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 rounded-xl transition-opacity duration-300 bg-black bg-opacity-95 hover:opacity-100">
                                <h2 className="h3 text-white p-4">{descripciones[currentImageIndex]}</h2>
                            </div>
                            <h2 className="h2 text-center text-accent mt-3">{nombres[currentImageIndex]}</h2>
                        </a>
                    </div>
                    <div className="flex-1 flex items-center ml-4">
                        <FaChevronRight className="text-5xl cursor-pointer" onClick={nextImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Projects;