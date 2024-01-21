import React from "react";

const TerminalCommand = ({
  command,
  children,
  showHorizontalBlink = false,
}) => {
  return (
    <div className="tv-green-font leading-6 text-xl max-md:text-sm mb-3 text-justify w-full">
      <div className="mb-2">
        <span className="text-white">$</span> devorizon
        <span className="text-white">&nbsp;&gt;&nbsp;</span>
        {command}
      </div>
      <div className=" text-justify max-md:w-[100%]">
        {/* <span className="text-white">$</span> */}
        <span className="text-white">&gt;&nbsp;</span>
        {showHorizontalBlink && (
          <span className="green-horizontal-blink"></span>
        )}
        {children}
        {!showHorizontalBlink && <span className="green-blink"></span>}
      </div>
    </div>
  );
};

export default TerminalCommand;
