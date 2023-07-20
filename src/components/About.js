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
    threshold: 0.5,
  });

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text */}
          <div>text</div>
        </div>
      </div>
    </section>
  );
};

export default About;
