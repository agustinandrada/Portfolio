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
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              Hello! I'm Agustin Andrada, a passionate Freelancer Full Stack
              Developer. With almost a year of experience in the field, I'm
              driven by a deep passion for technology and a strong desire to
              create innovative solutions that make a positive impact.
            </h3>
            <p className="mb-6">
              Alongside my technical skills, I have valuable leadership
              experience as a dedicated scout for 16 years. This has taught me
              the values of teamwork, adaptability, and inspiring others to
              reach their full potential, creating a collaborative and
              empowering work environment.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={1} duration={10} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={4} duration={10} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Completed <br /> Projects
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={2} duration={10} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
