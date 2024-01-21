import React from "react";
import "../App.css";
import profile from "../assets/profile.JPG";
import "../css/glitch.scss";
import TerminalCommand from "./TerminalCommand";

// const Main = () => {
//   return (
//     <div className="retro-nintendo-container">
//       <div className="main-con w-[80%] max-md:w-[100%] m-auto">
//         <h1 className="mb-10 max-md:m-1 font-semibold text-xl underline">
//           Kshitiz Kumar's Portfolio
//         </h1>
//         <div
//           className="flex justify-between gap-2 max-md:flex-col-reverse
//         max-md:items-center"
//         >
//           <p className="leading-6 text-justify w-[50%] max-md:w-[100%] max-md:hidden">
//             Passionate Software Development Engineer specializing in React and
//             JavaScript, with a proven track record at Paytm and impactful
//             internships (Details about my internships are mentioned in my resume
//             link). I thrive under pressure, meeting tight deadlines, and leading
//             successful feature upgrades.
//             <div className="flex gap-8 mt-8">
//               <a
//                 href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/"
//                 target="_blank"
//                 className="link-glitch"
//               >
//                 LinkedIn
//               </a>
//               <a
//                 href="https://drive.google.com/file/d/1MW5287uW6OxHOPuCwu3_jLU9zmV1M7Es/view?usp=sharing"
//                 target="_blank"
//                 className="link-glitch"
//               >
//                 Resume
//               </a>
//               <a
//                 target="_blank"
//                 className="link-glitch"
//                 href="mailto:kshitijdev046@gmail.com"
//               >
//                 Mail
//               </a>
//               <a
//                 target="_blank"
//                 className="link-glitch"
//                 href="https://devorizon.hashnode.dev/"
//               >
//                 Blog
//               </a>
//             </div>
//           </p>
//           <p className="leading-[16px] text-justify w-[100%] md:hidden text-[12px] break-words hyphens-auto ">
//             Passionate Software Development Engineer specializing in React and
//             JavaScript, with a proven track record at Paytm and impactful
//             internships (Details about my internships are mentioned in my resume
//             link). I thrive under pressure, meeting tight deadlines, and leading
//             successful feature upgrades.
//             <div className="flex gap-3 justify-between underline mt-8">
//               <a
//                 href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/"
//                 target="_blank"
//                 className="link-glitch"
//               >
//                 LinkedIn
//               </a>
//               <a
//                 href="https://drive.google.com/file/d/1MW5287uW6OxHOPuCwu3_jLU9zmV1M7Es/view?usp=sharing"
//                 target="_blank"
//                 className="link-glitch"
//               >
//                 Resume
//               </a>
//               <a
//                 target="_blank"
//                 className="link-glitch"
//                 href="mailto:kshitijdev046@gmail.com"
//               >
//                 Mail
//               </a>
//               <a
//                 target="_blank"
//                 className="link-glitch"
//                 href="https://devorizon.hashnode.dev/"
//               >
//                 Blog
//               </a>
//             </div>
//           </p>
//           <div
//             // style={{ backgroundImage: `url(${profile})` }}
//             className=" w-[40%] max-md:w-[30%]"
//           >
//             <div className="flicker-image">
//               <img src={profile} />
//             </div>
//             {/* <div class="image-distortion" id="base"></div>
//             <div class="image-distortion" id="red"></div>
//             <div class="image-distortion" id="cyan"></div>
//             <div class="image-distortion" id="transparent"></div> */}
//             {/* <img src={profile} className="flicker-image w-full object-cover" /> */}
//           </div>
//           {/* <div>
//             <a href="">
//               <i></i>
//             </a>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };
const Main = () => {
  return (
    <div className="tv-green-font ms-dos">
      <div className="main-con w-[80%] max-md:w-[100%] m-auto border-2 border-white">
        <div className="mb-10 max-md:mb-2 relative max-md:m-1 text-center bg-white w-full font-semibold text-3xl underline bg-[var(--tv-green)] text-black p-2">
          <div className="absolute top-[15%] origin-center transform cursor-pointer">
            X
          </div>
          <h1>Kshitiz Kumar</h1>
        </div>
        <div
          className="flex justify-between gap-2 max-md:flex-col-reverse
        max-md:items-center p-5 max-md:pl-2 pr-2 flex-wrap"
        >
          <div className="flex w-[50%] flex-col max-md:w-full max-md:order-1">
            <TerminalCommand command="node ./intro.js">
              Passionate Software Development Engineer specializing in React and
              JavaScript, with a proven track record at Paytm and impactful
              internships (Details about my internships are mentioned in my
              resume link). I thrive under pressure, meeting tight deadlines,
              and leading successful feature upgrades.
            </TerminalCommand>
            <TerminalCommand command="node ./contact.js" showHorizontalBlink>
              <div className="flex gap-8 w-max flex-wrap">
                <a
                  href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/"
                  target="_blank"
                  className="link-glitch bg-[#fd00fb]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1MW5287uW6OxHOPuCwu3_jLU9zmV1M7Es/view?usp=sharing"
                  target="_blank"
                  className="link-glitch"
                >
                  Resume
                </a>
                <a
                  target="_blank"
                  className="link-glitch bg-[#fb0102]"
                  href="mailto:kshitijdev046@gmail.com"
                >
                  Mail
                </a>
                <a
                  target="_blank"
                  className="link-glitch bg-[#0301fc]"
                  href="https://devorizon.hashnode.dev/"
                >
                  Blog
                </a>
              </div>
            </TerminalCommand>
          </div>
          <div className=" w-[40%] max-md:w-full max-md:order-3">
            <TerminalCommand showHorizontalBlink command="node ./showImage.js">
              <div className="flicker-image ml-10 mt-5 max-md:m-auto max-md:w-[100px]">
                <img src={profile} />
              </div>
            </TerminalCommand>
          </div>
          <div className="w-full">Scroll down to move further &gt;&gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
