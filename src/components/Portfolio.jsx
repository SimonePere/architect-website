/** @format */

import React from "react";
import { PortfolioCard, Sidebar, SubtitlePage } from ".";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const links = [
    { href: "/project-case-study/iren", text: "iren" },
    { href: "/project-case-study/ghiaccio", text: "palaghiaccio" },
    { href: "/project-case-study/azimut", text: "azimut" },
    { href: "/project-case-study/comune-torino", text: "comune di torino" },
  ];
  return (
      <div className="container mx-auto p-6   overflow-x-hidden">
        <SubtitlePage mainText="Ogni" highlightedText="Progetto" subText="una storia." paragraphText="La mia esperienza al servizio di idee ( e sfide ) che prendono forma." />
        <div className=" xl:mt-16 lg:flex lg:-ml">
          {/* Sidebar */}
          <div className="md:w-72 hidden md:block">

            <Sidebar links={links}/>



          </div>

          {/* Content Section */}
          <div className="  mt-8">
            {/* Animazione del testo per swipe */}
            <div className="my-4 w-full sm:hidden animate-pulse">
              Fai swipe per vederli tutti
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>

          <div className=" gap-5 pb-2 snap-x snap-mandatory flex sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 overflow-y-hidden overflow-x-auto
             lg:overflow-hidden lg:grid lg:grid-cols-3">
              <Link
                href={"/project-case-study/iren"}
                className="hover:no-underline"
              >
                <PortfolioCard
                  title="Asseverazioni iren"
                  subtitle="Sicurezza e affidabilità per gli interventi energetici, grazie a verifiche rigorose e certificazioni."
                  badgeText="New"
                  badgeColor="bg-blue-500"
                  buttonTitle="Nel dettaglio"
                  hasImage={true}
                  imageSrc="/assets/palazzo-iren.webp"
                  hasBadge={false}
                hasButton={true}
                
                />
              </Link>

              <Link
                href={"/project-case-study/ghiaccio"}
                className="hover:no-underline"
              >
                <PortfolioCard
                  title="Efficientamento energetico "
                  subtitle="Riduzione dei consumi e miglioramento delle prestazioni energetiche del Palazzo del Ghiaccio di Torre Pellice."
                  badgeText="New"
                  badgeColor="bg-blue-500"
                  buttonTitle="Nel dettaglio"
                  hasImage={true}
                  imageSrc="/assets/palaghiaccio-torre.webp"
                  hasBadge={false}
                  hasButton={true}
                />
              </Link>

              <Link
                href={"/project-case-study/azimut"}
                className="hover:no-underline"
              >
                <PortfolioCard
                  title="Progettazione azimut"
                  subtitle="Un progetto di successo che coniuga design, funzionalità ed efficienza energetica per la Palazzina F2 a Livorno."
                  badgeText="New"
                  badgeColor="bg-blue-500"
                  buttonTitle="Nel dettaglio"
                  hasImage={true}
                  imageSrc="/assets/azimut.webp"
                  hasBadge={false}
                  hasButton={true}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Portfolio;
