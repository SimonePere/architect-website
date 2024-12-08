/** @format */

import React from "react";
import { DesignCard } from ".";

const Features = () => {
  return (
    <section>
      <div id="features" className="container px-6 py-10 mx-auto">
        <h2 className=" capitalize  ">
          I miei <span className="underline decoration-[#fcca46]">Servizi</span>{" "}
          <br />
          per te.
        </h2>

        <p className="mt-4 ">
          Esperienza consolidata in uno dei più rinomati Studi Ingegneristici di
          Torino.
        </p>
        {/* @audit contenitore Cards */}
        <div
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 
        xl:grid-cols-3"
        >
          <DesignCard
            title="Asseverazione"
            subtitle="Certificazione e validazione degli interventi energetici, garantendo qualità e rispetto delle normative."
            badgeText="Analisi"
            buttonTitle="Leggi di più"
            id="asseverazioni"
          />

          <DesignCard
            title="Efficientamento Energetico"
            subtitle="Progettazione di soluzioni impiantistiche innovative per ridurre i consumi e migliorare le prestazioni energetiche."
            badgeText="Sostenibile"
            buttonTitle="Leggi di più"
            id="efficientamento"

          />

          <DesignCard
            title="Progettazione"
            subtitle="Gestione e supervisione di un progetto che ha unito estetica, funzionalità ed efficienza energetica."
            badgeText="Studio"
            buttonTitle="Leggi di più"
            id="asseverazioni"

          />
        </div>
      </div>
    </section>
  );
};

export default Features;
