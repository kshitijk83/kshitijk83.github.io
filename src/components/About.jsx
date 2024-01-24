import React from "react";
import profile from "../assets/profile.JPG";

const About = () => {
  return (
    <div className="retro-nintendo-container w-full h-full ">
      <div className="text-[40px] max-lg:text-[24px]">About Me</div>
      <div
        className="flex gap-4 items-center justify-between mt-5 mb-5
      max-lg:flex-col-reverse 
      "
      >
        <div
          className="w-[60%] max-xl:w-full leading-6 tracking-[0.78px] text-justify text-[25px]
          max-lg:text-[16px] font-[ms-dos]"
        >
          Dynamic Software Engineer with a flair for web development. I have
          spent over 5 years with Javascript, ReactJS and React native. I lead
          enhanced user experiences and deliver projects that scale seamlessly.
          I am a team player, but I don't hesitate to take on ambitious projects
          single-handedly.
          <div className="flex gap-8 w-full flex-wrap mt-3 text-left">
            Skills: ReactJS, NextJS, ReactNative, NodeJS, MongoDB
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
