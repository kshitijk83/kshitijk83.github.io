import React from "react";
import paytm from "../assets/paytm.svg";

const Experience = () => {
  return (
    <div className="retro-nintendo-container w-full h-full ">
      <div className="text-[40px] max-sm:text-[24px]">Experience</div>
      <div className="mt-4">
        <div className="flex flex-col items-center w-full">
          <h1 className="mb-4 mt-4">Wayground</h1>
          <div className="text-[10px] mb-2">(Jun 24 - Present)</div>

          <div className="mb-3 max-sm:text-[15px] max-sm:font-[ms-dos]">
            Software Development Engineer
          </div>
          <div className="text-center leading-7 text-[15px] max-sm:text-[15px] sm:mt-10 max-sm:px-4 break-words w-full max-w-full">
            Upgraded VoyageMath
            <span className="small-text-credit">&nbsp;at&nbsp;</span>Wayground
            <span className="small-text-credit">&nbsp;by&nbsp;</span>leading LTI
            integrations
            <span className="small-text-credit">&nbsp;and&nbsp;</span>owning
            Parent Mode UI/UX. Optimized performance, slashing bundle sizes
            <span className="small-text-credit">&nbsp;by&nbsp;</span>80%
            <span className="small-text-credit">&nbsp;and&nbsp;</span>boosting
            Lighthouse scores
            <span className="small-text-credit">&nbsp;from&nbsp;</span>69
            <span className="small-text-credit">&nbsp;to&nbsp;</span>80.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
