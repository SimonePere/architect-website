/** @format */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BannerFooter } from ".";

const Footer = () => {
  return (
    <footer className="mt-12 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <BannerFooter/>
        <div className=" md:justify-between">
          
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h4 className="mb-6 uppercase">Servizi</h4>
              <ul>
                <li><Link href="#features" className="text-[#adadad] hover:no-underline">Asseverazioni</Link></li>
                <li><Link href="#features" className=" text-[#adadad] hover:no-underline">Efficientamento Energetico</Link></li>
                <li><Link href="#features" className=" text-[#adadad] hover:no-underline">Progettazione</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 uppercase">Progetti</h4>
              <ul>
                <li><Link href="/project-case-study/iren" className="text-[#adadad] hover:no-underline">Iren</Link></li>
                <li><Link href="/project-case-study/ghiaccio" className="text-[#adadad] hover:no-underline">Palaghiaccio</Link></li>
                <li><Link href="/project-case-study/azimut" className="text-[#adadad] hover:no-underline">Azimut</Link></li>
                <li><Link href="/project-case-study/comunetorino" className="text-[#adadad] hover:no-underline">Comune di Torino</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 uppercase">Contatti</h4>
              <ul>
                <li className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-lg" />
                  <Link href="mailto:davide.mele95@hotmail.com" className="text-[#adadad] hover:no-underline">
                    davide.mele95@hotmail.com
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-lg" />
                  <Link href="tel:+39393984217" className="text-[#adadad] hover:no-underline">
                    +39 3932984217
                  </Link>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faLinkedinIn} className=" mr-3 text-lg" />
                  <Link  href="https://www.linkedin.com/in/davide-mele-091619255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:no-underline">
                    <span className="text-[#adadad]">Davide Mele</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-b-1 border-[#fcca46] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            <Link href="/" className="text-[#adadad] hover:no-underline">
              Davide Mele Website
            </Link> <span className="text-[#adadad]">© 2025. Tutti i diritti riservati.</span>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Aggiungi altre icone social qui */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
