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
    description:
      "Final project of the bootcamp, where in a group of 8 people and using agile technologies, we developed an e-commerce, which was a platform for the sale of sports supplies, I participated as a back-end developer, and combined filters were implemented in the application, platform payment, database, cloudinary, local storage, logging system, third-party and local authentication, deployed.",
    link: "https://sportwear.vercel.app",
  },
  {
    name: "Dallas Web",
    description:
      "FA custom-made website for a rustic/neon-themed bar/pub, featuring functionalities such as food ordering and reservations",
    link: "#",
  },
  {
    name: "Dogs app",
    description:
      "Application made from the Dog API, in which for each existing dog breed a letter with information about the dog was shown, with combinable filters, pagination, its own database and deployed.",
    link: "#",
  },
  {
    name: "Rick and Morty app",
    description:
      "Application made from the Rick and Morty API, in which for each existing character in the series, a letter with information about the character was displayed, with combinable filters, a logging and paging system.",
    link: "#",
  },
];

const Services = () => {
  return (
    <section id="service" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten
          mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[450px] mb-16 ">
              I'm a passionate Freelance Full Stack Developer{" "}
            </h3>
          </div>
        </div>
        <div>
          {/* services */}
          <div className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div>
                      <a href={link}>
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
