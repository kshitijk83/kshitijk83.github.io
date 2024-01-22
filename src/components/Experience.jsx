import React from "react";
import paytm from "../assets/paytm.svg";

const Experience = () => {
  return (
    <div className="retro-nintendo-container w-full h-full ">
      <div className="text-[40px]">Experience</div>
      <div className="mt-4">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 mt-4">Paytm</h1>
          <div className="text-[10px] mb-2">(Jan 22 - Present)</div>

          <div className="mb-3">Software Developement Engineer</div>
          <div className="text-center leading-5 text-[15px]">
            <span className="small-text-credit">
              &nbsp;Spearheaded the&nbsp;
            </span>
            development
            <span className="small-text-credit">&nbsp;of a&nbsp;</span>dynamic
            platform <span className="small-text-credit">&nbsp;for&nbsp;</span>
            Paytm sales agents,
            <span className="inline-flex flex-col text-[8px] leading-3 translate-y-[-8px]">
              <span>enabling</span>
              <span>efficient</span>
            </span>
            tracking
            <span className="small-text-credit">&nbsp;of&nbsp;</span>incentives,
            progress,<span className="small-text-credit">&nbsp;and&nbsp;</span>
            rewards
          </div>
        </div>
        <div className="mt-8">
          <div className="text-center mb-8 text-[20px]">Internships</div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <div className="mb-2 text-center">Flash Tech</div>
                <div className="flex gap-2 items-end">
                  {/* <div className="text-[10px]">Role</div> */}
                  <div className="text-[12px] font-bold">
                    React Native Internship
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-2 text-center">StartxLabs</div>
                <div className="flex gap-2 items-end">
                  {/* <div className="text-[10px]">Role</div> */}
                  <div className="text-[12px] font-bold">
                    React Native Internship
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-7">
              <div className="flex flex-col items-center">
                <div className="mb-2 text-center">
                  National Blockchain Project of India
                </div>
                <div className="flex gap-2 items-end">
                  <div className="text-[10px]">Role</div>
                  <div className="text-[12px] font-bold">
                    Full Stack Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
