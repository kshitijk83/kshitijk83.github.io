import React from "react";
import project1 from "../assets/project1.gif";

const Projects = () => {
  return (
    <div className="retro-nintendo-container w-full h-full ">
      <div className="text-[40px] mb-2">Projects</div>
      <div className="flex justify-around items-center">
        <img src={project1} className="w-[45%]" />
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://stackoverflow-clone-blond.vercel.app/"
            target="_blank"
            className="link-glitch bg-[#472a2a] pointer-events-auto"
          >
            Stackoverflow Clone
          </a>
          <div className="text-[10px]">NextJS v14, MongoDB, NodeJS</div>
        </div>
      </div>
      <div className="mt-10 flex justify-center gap-10">
        <div className="flex flex-col items-center gap-4 w-[50%]">
          <a
            href="https://github.com/kshitijk83/BudgetChain"
            target="_blank"
            className="link-glitch bg-[#472a2a] pointer-events-auto"
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
        <div className="flex flex-col items-center gap-4 w-[50%]">
          <a
            href="https://github.com/kshitijk83/HP-app"
            target="_blank"
            className="link-glitch bg-[#472a2a] pointer-events-auto"
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
