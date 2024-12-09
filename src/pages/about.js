/** @format */

import { Button, SubtitlePage } from "@/components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col">
      <SubtitlePage
        mainText="In costante"
        highlightedText="ricerca"
        subText="di crescita."
        paragraphText="La passione per il settore mi porta a formarmi continuamente."
      />

      <div className="my-10">
        <Link
          className="hover:no-underline"
          href={"/assets/Davide-Mele-25.pdf"}
          download={"Davide-Mele-25.pdf"}
        >
          <Button
            onClick={() => console.log("Cv scaricato correttamente")}
            iconType={"download"}
            title={"scarica il mio cv"}
          />
        </Link>
      </div>

      <div
        id="about-container"
        className="design-card w-full h-auto md:h-auto md:grid grid-cols-5 gap-5"
      >
        <div className="col-span-2">
          <h2>Esperienza Professionale in Progetti Complessi</h2>
          <p className="my-3">
            Con oltre <span className="text-highlight">5 anni</span> di esperienza presso
            <Link
              href={"http://www.ipeprogetti.it/"}
              className="px-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ipe Progetti <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Link>{" "}
            a Torino, ho affinato competenze nella{" "}
            <span className="sottolineatura">progettazione impiantistica</span> e{" "}
            <span className="sottolineatura">gestione di commesse complesse</span>.
            <div className="mt-2">
              Tra i miei traguardi, spiccano la supervisione di progetti multimilionari e
              l&apos;implementazione di <span className="text-highlight">soluzioni innovative</span>{" "}
              che hanno ottimizzato l&apos;efficienza operativa in modo significativo.
            </div>
          </p>
        </div>

        <Image
          src="/assets/davide-mele.webp"
          alt="davide-mele"
          className=" design-img col-span-2"
          width={500}
          height={200}
        />
        <div className="row-span-2 my-4 md:my-0">
          <h2>Competenza Tecnica</h2>
          <p className="my-3">
            Grazie alla mia <span className="text-highlight">formazione tecnica</span> e alla
            padronanza di software come <span className="text-highlight">AutoCAD</span>, Suite
            Blumatica e Microsoft Project, ho sviluppato un approccio sistematico alla
            risoluzione di problemi complessi. <br /> Questo mi consente di trasformare concetti in{" "}
            <span className="">risultati tangibili</span>, sempre con un occhio alle{" "}
            <span className="text-highlight">ultime tecnologie</span> del settore.
          </p>
        </div>

        <Image
          src="/assets/mole.webp"
          alt="davide-mele"
          className="design-img object-cover"
          width={500}
          height={200}
        />
        <div>
          <blockquote className=" ">
            &quot; La voglia di migliorare sempre è ciò che mi spinge a non fermarmi mai.&quot;
          </blockquote>
        </div>
        <div className="col-span-2 md:px-5 my-6 md:my-4">
          <h2>Visione per il Futuro: Innovazione e Sostenibilità</h2>
          <p className="my-3">
            Nel mio percorso, la <span className="text-highlight">sostenibilità</span> non è solo
            un obiettivo, ma <span className="sottolineatura">IL principio guida</span>.
            <span className="mt-2 block">
              Attraverso soluzioni <span className="text-shadow">innovative</span> e
              l&apos;adozione di tecnologie <span className="">eco-compatibili</span>, miro a
              rivoluzionare il settore edilizio, creando valore per i clienti e{" "}
              <span className="text-highlight"> rispettando l&apos;ambiente</span>.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
