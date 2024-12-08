import React from "react";
import Button from "./Button";

const DesignCard = ({ 
  title, 
  subtitle, 
  badgeText, 
  buttonTitle, 
  additionalClasses = "" 
}) => {
  return (
    <div className={`relative p-6 bg-[#1c1c1c] text-[#f2f4f7] overflow-hidden border-8 border-black shadow-[15px_15px_0_#000] transform rotate-[-2deg] transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-[20px_20px_0_#000] ${additionalClasses}`}>
      {/* Badge */}
      <div className="absolute top-3 right-[-135px] w-[350px] text-center rotate-45 bg-black text-[#f2f4f7] py-3 font-bold text-lg tracking-wider transition-all duration-300 hover:bg-[#fcca46]">
        {badgeText}
      </div>

      {/* Titolo */}
      <h2 className="text-2xl font-bold uppercase mb-8 border-b-2 border-[#fcca46] inline-block">
        {title}
      </h2>

      {/* Sottotitolo */}
      <p className="text-lg leading-relaxed mb-8 text-[#f2f4f7]">
        {subtitle}
      </p>

      {/* Bottone */}
      <Button title={buttonTitle} />
    </div>
  );
};

export default DesignCard;
