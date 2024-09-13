import React from "react";
//*CountUp
import CountUp from "react-countup";

//*Intersection Observer Hook
import { useInView } from "react-intersection-observer";

//*motion
import { motion } from "framer-motion";

//*variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex-col flex gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-no-repeat h-[640px] mix-blend-lighten bg-top bg-full"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre Mi</h2>

            <motion.div
              variants={fadeIn("left", 2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <h3 className="h3 mb-4">
                Hola! Soy Agustin Andrada, un apasionado Desarrollador Full Stack.
                Con experiencia en la creación de aplicaciones web y móviles, utilizando tecnologías como React, Node.js, Express, JavaScript, PHP, Laravel, PostgreSQL y MySQL.
              </h3>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              <p className="mb-6">
                Ademas de mis habilidades técnicas, puedo trabajar en equipo y colaborar para crear soluciones eficientes y escalables para mis clientes.
                Soy Scout hace 16 años por lo que estoy constantemente aprendiendo y mejorando mis habilidades, tanto para adaptarme a nuevos desafios,
                como para liderar cuando es necesario.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1"
            >
              {/* stats */}
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    <CountUp start={0} end={2} duration={5} />
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Años de  <br /> Experiencia
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    + <CountUp start={0} end={10} duration={5} />
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Proyectos <br /> Completados
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient mb-2">
                    + <CountUp start={0} end={10} duration={5} />
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Clientes <br /> Santisfechos
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
