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
        md:min-w-[350px] md:max-w-[500px] lg:max-w-[600px] snap-center `}
       
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
          className=" object-cover mb-4 h-[25vh]"
          width={500}
          height={200}
        />
      )}

      {/* Titolo */}
      <h2 className="uppercase mb-3  border-b-2 border-[#fcca46] inline-block w-2/3 md:h-24  md:py-4  ">
        {title}
      </h2>

      {/* Sottotitolo */}
      <p className=" mb-5 text-[#adadad]  overflow-hidden w-full h-20 ">
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
