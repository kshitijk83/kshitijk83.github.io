import React from "react";
import project1 from "../assets/project1.gif";

const Projects = () => {
  return (
    <div className="retro-nintendo-container w-full h-full ">
      <div className="text-[40px] mb-2 max-sm:text-[24px]">Projects</div>
      <div
        className="flex justify-around items-center max-xl:flex-col max-xl:gap-4
      max-xl:mt-4
      "
      >
        <img src={project1} className="w-[45%]" />
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://stackoverflow-clone-blond.vercel.app/"
            target="_blank"
            className="link-glitch bg-[#472a2a] pointer-events-auto max-sm:text-[2vh]"
          >
            Stackoverflow Clone
          </a>
          <div className="text-[10px]">NextJS v14, MongoDB, NodeJS</div>
        </div>
      </div>
      <div className="mt-10 max-sm:mt-4 flex max-sm:flex-col justify-center gap-10 max-sm:gap-4">
        <div className="flex flex-col items-center gap-4 max-sm:gap-2 w-[50%] max-sm:w-full">
          <a
            href="https://github.com/kshitijk83/BudgetChain"
            target="_blank"
            className="link-glitch bg-[#472a2a] pointer-events-auto max-sm:text-[2vh]"
          >
            BudgetChain
          </a>
          <div className="text-[10px]">NextJS v9, MongoDB, NodeJS</div>
          <div className="text-[10px] text-center leading-3">
            A solution<span className="small-text-credit">&nbsp;for&nbsp;</span>
            budget management discrepancies
            <span className="small-text-credit">&nbsp;happening in&nbsp;</span>
            college fests using solidity contracts{" "}
            <span className="small-text-credit">&nbsp;in&nbsp;</span> Ethereum
            Blockchain
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-[50%] max-sm:w-full">
          <a
            href="https://github.com/kshitijk83/HP-app"
            target="_blank"
            className="link-glitch bg-[#472a2a] pointer-events-auto max-sm:text-[2vh]"
          >
            Police CMS
          </a>
          <div className="text-[10px]">React, MongoDB, NodeJS, ExpressJS</div>
          <div className="text-[10px] text-center leading-3">
            An intuitive Content Management System
            <span className="small-text-credit">&nbsp;(CMS)&nbsp;</span>
            <span className="small-text-credit">&nbsp;for&nbsp;</span>regular
            website updates
            <span className="small-text-credit">&nbsp;for&nbsp;</span>Police
            Regular Updates
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
