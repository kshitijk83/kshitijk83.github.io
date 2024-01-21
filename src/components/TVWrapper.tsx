import React from "react";
import "../css/TVWrapper.scss";

const TVWrapper = () => {
  return (
    <div className="tv-wrapper">
      <div className="tv">
        <div className="tv__screen p-5">sdf</div>
        {/* <div className="tv__panel">
          <div className="tv__speaker"></div>
          <div className="tv__switch"></div>
          <div className="tv__switch"></div>
          <div className="tv__switch"></div>
          <div className="tv__speaker"></div>d
        </div> */}
        <div className="tv__holders">
          <div className="tv__holder"></div>
          <div className="tv__holder"></div>
        </div>
      </div>
    </div>
  );
};

export default TVWrapper;
