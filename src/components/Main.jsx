import React from "react";
import "../App.css";
import profile from "../assets/profile.JPG";
import "../css/glitch.scss";
import TerminalCommand from "./TerminalCommand";

const Main = () => {
  return (
    <div className="retro-nintendo-container w-full h-full">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="mb-10 max-md:m-1 font-semibold text-[30px] underline">
          The Portfolio
        </h1>
        <div className="font-sans mb-4">Directed By</div>
        <div className="">Kshitiz Kumar</div>
        <div className="flex gap-8 mt-8 w-max flex-wrap pointer-events-auto">
          <a
            href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/"
            target="_blank"
            className="link-glitch bg-[#472a2a]"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1MW5287uW6OxHOPuCwu3_jLU9zmV1M7Es/view?usp=sharing"
            target="_blank"
            className="link-glitch bg-[#472a2a]"
          >
            Resume
          </a>
          <a
            target="_blank"
            className="link-glitch bg-[#472a2a]"
            href="mailto:kshitijdev046@gmail.com"
          >
            Mail
          </a>
          <a
            target="_blank"
            className="link-glitch bg-[#472a2a]"
            href="https://devorizon.hashnode.dev/"
          >
            Blog
          </a>
        </div>
        {/* <div
          className="flex justify-between gap-2 max-md:flex-col
        max-md:items-center"
        >
          <div className="">
            <div className="flicker-image">
              <img src={profile} />
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <a
              href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/"
              target="_blank"
              className="link-glitch"
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
              className="link-glitch"
              href="mailto:kshitijdev046@gmail.com"
            >
              Mail
            </a>
            <a
              target="_blank"
              className="link-glitch"
              href="https://devorizon.hashnode.dev/"
            >
              Blog
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};
// const Main = () => {
//   return (
//     <div className="tv-green-font ms-dos">
//       <div className="main-con w-[80%] max-md:w-[100%] m-auto border-2 border-white">
//         <div className="mb-10 max-md:mb-2 relative max-md:m-1 text-center bg-white w-full font-semibold text-3xl underline bg-[var(--tv-green)] text-black p-2">
//           <div className="absolute top-[15%] origin-center transform cursor-pointer">
//             X
//           </div>
//           <h1>Kshitiz Kumar</h1>
//         </div>
//         <div
//           className="flex justify-between gap-2 max-md:flex-col-reverse
//         max-md:items-center p-5 max-md:pl-2 pr-2 flex-wrap"
//         >
//           <div className="flex w-[50%] flex-col max-md:w-full max-md:order-1">
//             <TerminalCommand command="node ./intro.js">
//               Passionate Software Development Engineer specializing in React and
//               JavaScript, with a proven track record at Paytm and impactful
//               internships (Details about my internships are mentioned in my
//               resume link). I thrive under pressure, meeting tight deadlines,
//               and leading successful feature upgrades.
//             </TerminalCommand>
//             <TerminalCommand command="node ./contact.js" showHorizontalBlink>
//               <div className="flex gap-8 w-max flex-wrap">
//                 <a
//                   href="https://www.linkedin.com/in/kshitiz-kumar-a0407314b/"
//                   target="_blank"
//                   className="link-glitch bg-[#fd00fb]"
//                 >
//                   LinkedIn
//                 </a>
//                 <a
//                   href="https://drive.google.com/file/d/1MW5287uW6OxHOPuCwu3_jLU9zmV1M7Es/view?usp=sharing"
//                   target="_blank"
//                   className="link-glitch"
//                 >
//                   Resume
//                 </a>
//                 <a
//                   target="_blank"
//                   className="link-glitch bg-[#fb0102]"
//                   href="mailto:kshitijdev046@gmail.com"
//                 >
//                   Mail
//                 </a>
//                 <a
//                   target="_blank"
//                   className="link-glitch bg-[#0301fc]"
//                   href="https://devorizon.hashnode.dev/"
//                 >
//                   Blog
//                 </a>
//               </div>
//             </TerminalCommand>
//           </div>
//           <div className=" w-[40%] max-md:w-full max-md:order-3">
//             <TerminalCommand showHorizontalBlink command="node ./showImage.js">
//               <div className="flicker-image ml-10 mt-5 max-md:m-auto max-md:w-[100px]">
//                 <img src={profile} />
//               </div>
//             </TerminalCommand>
//           </div>
//           <div className="w-full">Scroll down to move further &gt;&gt;</div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Main;
