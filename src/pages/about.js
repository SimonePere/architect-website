/** @format */

import { Button } from "@/components";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section>
      <div className=" container px-5 py-24 mx-auto flex flex-wrap">
        <div className=" container px-6 pb-10 mx-auto ">
          <h2 className=" capitalize  ">
            Alla continua ricerca con{" "}
            <span className="underline decoration-[#fcca46]">passione</span>{" "}
            <br />
            per l’innovazione tecnica.{" "}
          </h2>

          <p className="mt-4 ">Qualcosa su di me.</p>
          <div className="my-10">
            <Link className="hover:no-underline" href={"/assets/Davide-Mele-25.pdf"} download={"Davide-Mele-25.pdf"}>
              <Button onClick={() => console.log("Cv scaricato correttamente")} iconType={"download"} title={"scarica il mio cv"} />
            </Link>
          </div>
        </div>

        
        <div className=" lg:w-1/4 w-full mb-10 lg:mb-0 overflow-hidden">
          <Image
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="/assets/davide-mele.webp"
            width={460}
            height={500}
          />
        </div>
        <div className="design-card flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center  mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="  mb-3">Shooting Stars</h2>
              <p className="leading-relaxed ">
                Con oltre 5 anni di esperienza presso Ipe Progetti a Torino, ho
                maturato competenze avanzate in progettazione impiantistica e
                gestione di commesse, lavorando su progetti complessi che
                combinano precisione tecnica ed elevati standard di qualità.
              </p>
              <Link href="/" className="mt-3 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center  mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className=" mb-3">The Catalyzer</h2>
              <p className="">
                La mia formazione come geometra e la specializzazione in
                software avanzati come AutoCAD, Suite Blumatica, e Microsoft
                Project mi permettono di affrontare ogni sfida progettuale con
                metodo e visione.
              </p>
              <Link href="/" className="mt-3 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="mb-3">Neptune</h2>
              <p className="">
                Il mio obiettivo è crescere come Project Manager, continuando a
                sviluppare soluzioni innovative e sostenibili per il settore
                edilizio, sempre con un occhio attento all’efficienza energetica
                e al rispetto delle tempistiche e del budget.
              </p>
              <Link href="/" className="mt-3 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
