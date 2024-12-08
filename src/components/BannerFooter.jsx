import React from "react";
import Button from "./Button";

const BannerFooter = () => {
  return (
    <div className="design-card flex flex-col my-10 items-center gap-4  p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong className="text-xl sm:text-xl">Collaboriamo insieme.</strong>

          <Button href={"mailto:davide.mele95@hotmail.com"} title={"iniziamo!"}>
          
            </Button>
    </div>
  );
};

export default BannerFooter;
