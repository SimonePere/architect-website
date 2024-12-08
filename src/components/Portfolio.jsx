import React from "react";
import { PortfolioCard } from ".";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from  "@fortawesome/free-solid-svg-icons";


const Portfolio = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="container px-6 py-12 mx-auto">
        <h2 className="capitalize">
          Ogni <span className="underline decoration-[#fcca46]">Progetto</span>{" "}
          <br />
          una storia.
        </h2>

        <p className="mt-4">
          La mia esperienza al servizio di idee ( e sfide ) che prendono forma.
        </p>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          {/* Sidebar */}
          <div className="lg:mx-12 hidden md:block">
            <div className="mt-4 space-y-4 lg:mt-8">
              <Link href={"/project-case-study/iren"} className="uppercase block hover:underline">
                iren
              </Link>
              <Link href={"/project-case-study/ghiaccio"} className="uppercase block hover:underline">
                palaghiaccio
              </Link>
              <Link href={"/project-case-study/azimut"} className="uppercase block hover:underline">
                azimut
              </Link>
              <Link href={""} className="uppercase block hover:underline">
                comune di torino
              </Link>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 mt-8">
            

            {/* Animazione del testo per swipe */}
            <div className="my-4 w-full sm:hidden animate-pulse">
              Fai swipe per vederli tutti
              
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>

            <div className="gap-6 pb-2 md:pb-4 snap-x snap-mandatory flex overflow-y-hidden overflow-x-auto lg:overflow-hidden lg:grid lg:grid-cols-3">
              <Link href={"/project-case-study/iren"} className="hover:no-underline">
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

              <Link href={"/project-case-study/ghiaccio"} className="hover:no-underline">
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

              <Link href={"/project-case-study/azimut"} className="hover:no-underline">
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
    </section>
  );
};

export default Portfolio;
