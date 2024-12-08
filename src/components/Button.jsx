/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faPhone,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Button = ({
  title,
  href, // Prop per aggiungere un link
  additionalClasses = "",
  onClick,
  iconType,
  variant = "colored", // Prop per controllare lo stile (default: "colored")
}) => {
  // Mappa delle icone disponibili
  const icons = {
    download: faDownload,
    email: faEnvelope,
    phone: faPhone,
    arrow: faArrowRight,
    star: faStar,
  };

  // Classi condizionali in base alla variante
  const variantClasses =
    variant === "colored"
      ? "bg-[#fe7f2d] text-[#f2f4f7] hover:bg-[#fcca46] hover:text-black"
      : "bg-transparent text-white hover:bg-[#fcca46] hover:text-black";

  // Contenuto del bottone/link
  const content = (
    <span
      className={`flex items-center justify-center gap-2 px-6 py-3 
        font-bold uppercase border-4 border-black shadow-[0_5px_0_#000] transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:shadow-none ${variantClasses} ${additionalClasses}`}
    >
      {title}
      {iconType && icons[iconType] && (
        <FontAwesomeIcon icon={icons[iconType]} className="text-lg" />
      )}
    </span>
  );

  // Se href è presente, restituisci un link
  if (href) {
    return (
      <Link href={href} className="inline-block hover:no-underline">
        {content}
      </Link>
    );
  }

  // Altrimenti restituisci un bottone
  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
};

export default Button;
