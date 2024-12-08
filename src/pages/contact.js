/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPhoneAlt,
  faMapSigns,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Button } from "@/components";

const Contact = () => {
  return (
      <div className="container mx-auto p-6">
        <div className=" mt-16 lg:flex lg:items-start lg:space-x-12">
          {/* Informazioni di contatto */}
          <div className="design-card lg:w-1/2">
            <div className="mt-6">
              <h2>
                Entriamo in contatto <br />{" "}
              </h2>
              <p>
                Sono sempre disponibile per discutere nuove opportunità,
                collaborazioni o progetti. Inviami un messaggio e farò del mio
                meglio per risponderti al più presto.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <ul>
                <li className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faMapSigns} className="mr-3 text-lg" />
                  <Link
                    href="mailto:davide.mele95@hotmail.com"
                    className="hover:no-underline"
                  >
                    Torino
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-lg" />
                  <Link
                    href="mailto:davide.mele95@hotmail.com"
                    className="hover:no-underline"
                  >
                    davide.mele95@hotmail.com
                  </Link>
                </li>
                <li className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-lg" />
                  <Link href="tel:+39393984217" className="hover:no-underline">
                    +39 3932984217
                  </Link>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="mr-3 text-lg"
                  />
                  <Link
                    href="https://www.linkedin.com/in/davide-mele-091619255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="hover:no-underline"
                  >
                    Davide Mele
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Form di contatto */}
          <div className=" lg:w-1/2 mt-8 lg:mt-0">
            <form className="mt-6">
              <div className="flex-1">
                <label className="block mb-2 -gray-200"></label>
                <input
                  type="text"
                  placeholder="Il tuo nome"
                  className="block w-full px-5 py-3 mt-2 "
                />
              </div>

              <div className="flex-1 mt-6">
                <label className="block mb-2 text-sm "></label>
                <input
                  type="email"
                  placeholder="latua@email.com"
                  className="block w-full px-5 py-3 mt-2"
                />
              </div>

              <div className="w-full mt-6 mb-16">
                <label className="block mb-2 "></label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 "
                  placeholder="Messaggio"
                ></textarea>
              </div>

              <Button iconType={"arrow"} title={"invia"} onClick={() => console.log("Inviato!")}/>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
