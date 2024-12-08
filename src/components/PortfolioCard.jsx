import React from "react";
import Button from "./Button";
import Image from "next/image";

const PortfolioCard = ({
  title,
  subtitle,
  badgeText,
  badgeColor = "bg-black",
  badgeTextColor = "#f2f4f7",
  buttonTitle,
  additionalClasses = "",
  hasImage = false,
  imageSrc = "",
  hasBadge = true,
  hasButton = true,
}) => {
  return (
    <div
      className={`relative  design-card 
        ${additionalClasses} min-w-[85vw] max-w-[100vw] min-h-[100%]  
        md:min-w-[400px] md:max-w-[500px] lg:max-w-[600px] snap-center `}
       
    >
      {/* Badge opzionale */}
      {hasBadge && badgeText && (
        <div
          className={`absolute top-2 right-2 w-[130px] md:w-[150px] text-center rotate-12 
            ${badgeColor} text-${badgeTextColor} py-2 font-bold text-sm tracking-wide 
            transition-all duration-300 hover:bg-[#fcca46]`}
        >
          {badgeText}
        </div>
      )}

      {/* Immagine opzionale */}
      {hasImage && imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          className=" object-cover mb-4"
          width={500}
          height={200}
        />
      )}

      {/* Titolo */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-3 border-b-2 border-[#fcca46] inline-block w-2/3 ">
        {title}
      </h2>

      {/* Sottotitolo */}
      <p className="text-sm md:text-base leading-relaxed mb-5 text-[#f2f4f7] h-[85px] lg:h-[100px] overflow-hidden">
        {subtitle}
      </p>

      {/* Bottone opzionale */}
      {hasButton && (
        <div className="w-full flex justify-center">
          <Button title={buttonTitle} />
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
