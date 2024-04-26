import React from "react";

//*motion
import { motion } from "framer-motion";

//*variants
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-x-10"
        >
          {/* Imagen1 */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
              >
                <h1 className="h1 leading-tight text-accent">
                  Mis ultimos <br /> Trabajos.
                </h1>
              </motion.div>
              {/* <a href="https://github.com/agustinandrada" target="_blank">
                <button className="btn bn-sm">View all projects</button>
              </a> */}
            </div>
            <div className="flex gap-x-6 flex-col lg:flex-row">
              <motion.div
                variants={fadeIn("right", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
              >
                <div>
                  <h2 className="h3 mb-4 titulo-link">
                    <a href="https://unbcollections.com.ar" target="_blank">UNB Collection</a>
                  </h2>
                  <h3 className="max-w-sm mb-2">
                    UNB COLLECTIONS S.A. es una empresa argentina conformada por profesionales con amplia trayectoria
                    y experiencia en el gerenciamiento de empresas de internet y de tecnología de inversión.
                    Gerenciamiento de proyectos de desarrollo de software así como los recursos humanos involucrados durante toda
                    la vida del software: análisis funcional, desarrollo, testeo, puesta en producción y soporte.
                  </h3>
                  <p className="max-w-sm mb-16 text-blue-500">
                    Utilicé tecnologías tales como Laravel, PHP, MySQL, JavaScript, HTML, CSS, Tailwind, Boostrap, React, Node, Express.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
              >
                <div>
                  <h2 className="h3 mb-4 titulo-link">
                    <a href="https://sistemanube.com" target="_blank">Sistema Nube</a>
                  </h2>
                  <h3 className="max-w-sm mb-2">
                    Sistema enlazado con tienda nube, que sirve para la gestión de e-commerce, mediante comodas interfaces para el usuario
                    y un sistema de premiacion por consumo para clientes.
                  </h3>
                  <p className="max-w-sm mb-16 text-blue-500">
                    Utilicé tecnologías tales como Laravel, PHP, MySQL, JavaScript, HTML, CSS.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("right", 3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
              >
                <div>
                  <h2 className="h3 mb-4 titulo-link">
                    <a href="https://agustin-andrada.vercel.app" target="_blank">Freelance</a>
                  </h2>
                  <h3 className="max-w-sm mb-2">
                    Como freelance, me encargo de crear soluciones para pequeños y medianos negocios. Tratando siempre de buscar
                    la mejor solución para sus necesidades con el menor costo y el mejor tiempo posible.
                  </h3>
                  <p className="max-w-sm mb-16 text-blue-500">
                    Utilicé tecnologías tales como React, Node, Express, JavaScript, HTML, CSS, Tailwind, PostgreSQL.
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </motion.div >
      </div >
    </section >
  );
};

export default Work;
