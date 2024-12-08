import React from "react";
import { Button } from ".";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="
        bg-gray-400 
        bg-no-repeat 
        bg-cover 
        bg-blend-multiply
        bg-[url('/assets/davide-mele.webp')]
        bg-[-20px_0px]
        md:bg-[url('/assets/torino.webp')]
        md:bg-[right_top]
      "
    >
      <div className="px-4 mx-auto max-w-screen-xl py-16 md:py-24 lg:py-56 text-start sm:text-center">
        {/* Testo introduttivo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-lg font-normal md:text-xl block">Ciao, sono </span>
            Davide Mele
          </h1>
        </motion.div>

        <motion.p
          className=" leading-relaxed md:text-lg lg:text-xl max-w-prose mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Unisco tecnica e visione per creare soluzioni innovative che
          migliorano gli spazi e promuovono la sostenibilità.
        </motion.p>

        {/* Pulsanti */}
        <motion.div
          className="pt-20 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button
            variant=""
            title="Progetti"
            iconType="arrow"
            href="/project-case-study"
          />
          <Button
            title="Contattami"
            iconType="email"
            href="/contact"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
