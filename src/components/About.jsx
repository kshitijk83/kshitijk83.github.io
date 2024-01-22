import React from "react";
import profile from "../assets/profile.JPG";

const About = () => {
  return (
    <div className="retro-nintendo-container w-full h-full ">
      <div className="text-[40px]">About Me</div>
      <div className="flex gap-4 items-center justify-between  mt-5 mb-5">
        <div className="w-[60%] leading-6 tracking-[0.78px] text-justify text-[25px]  font-[ms-dos]">
          Passionate Software Development Engineer specializing in React and
          JavaScript, with a proven track record at Paytm and impactful
          internships (Details about my internships are mentioned in my resume
          link). I thrive under pressure, meeting tight deadlines, and leading
          successful feature upgrades.
          <div className="flex gap-8 w-full flex-wrap mt-3">
            Skills: ReactJS, JavaScript, NextJS, NodeJS, MongoDB
          </div>
        </div>
        <div className="flicker-image mt-4 mb-4 flex justify-center items-center w-[35%]">
          <img src={profile} className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
