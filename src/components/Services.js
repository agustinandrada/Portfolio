import React from "react";

//*icons
import { BsArrowUpRight } from "react-icons/bs";

//*motion
import { motion } from "framer-motion";

//*variants
import { fadeIn } from "../variants";

//*service data
const services = [
  {
    name: "SportWear Ecommerce",
    description: "Platform for selling sports supplies.",
    link: "https://sportwear.vercel.app",
  },
  {
    name: "Dallas Web",
    description:
      "A custom-made website for a rustic/neon-themed bar/pub, featuring functionalities such as food ordering and reservations",
    link: "#",
  },
  {
    name: "Dogs app",
    description: "Application made from the Dog API.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section id="service" className="section mt-20">
      <div className="container mx-auto mt-20">
        {/* services */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 lg:mb-0 mt-5 py-11"
            >
              <h2 className="h2 text-accent ">What I Do.</h2>
              <h3 className="h3 max-w-[455px]">
                I'm a passionate Freelance Full Stack Developer{" "}
              </h3>
            </motion.div>
          </div>
          <div>
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <motion.div
                  variants={fadeIn("right", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="border-b border-white/20 h-[146px] mb-[10px] flex"
                  key={index}
                >
                  <div className="max-w-[476px] mb-3">
                    <h4 className="text-[20px] font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight mb-3 pb-6">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href={link}
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
