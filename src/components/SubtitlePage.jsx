import React from "react";

const SubtitlePage = ({ 
  mainText = "", 
  highlightedText = "", 
  subText = "", 
  paragraphText = "" 
}) => {
  return (
    <div className="">
      <h2 className="capitalize">
        {mainText}{" "}
        <span className="underline decoration-[#fcca46]">
          {highlightedText}
        </span>{" "}
        <br />
        {subText}
      </h2>
      <p className="mt-4">{paragraphText}</p>
    </div>
  );
};

export default SubtitlePage;
