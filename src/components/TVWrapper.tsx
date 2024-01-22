import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../css/TVWrapper.scss";
import ContentOverlay from "./ContentOverlay";
import { InView } from "react-intersection-observer";
import StaticNoise from "./StaticNoise";
import NavBar from "./NavBar";
import Main from "./Main";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import End from "./End";
import bgSound from "../assets/bgSound.mp3";
import noiseSound from "../assets/noise.mp3";

const TVWrapper = ({ children }) => {
  const screenRef = useRef<any>(null);
  const angleRef = useRef<any>(0);
  const bgSoundRef = useRef<any>(null);
  const noiseSoundRef = useRef<any>(null);

  // Put as many components as you like here
  const channels = [<Main />, <About />, <Experience />, <Projects />, <End />];

  const channelCount = channels.length;
  const [currentlyVisibleChannel, setCurrentlyVisibleChannel] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(false);

  const scrollref = useRef(null);

  const handleScroll = () => {
    const scrollTop =
      screenRef.current.scrollTop || screenRef.current.scrollTop;
    const height =
      screenRef.current.scrollHeight - screenRef.current.clientHeight;

    if (scrollref.current) {
      // @ts-ignore
      scrollref.current.style.setProperty(
        "left",
        `${(scrollTop / height) * 100}%`
      );
    }
    if (angleRef.current) {
      angleRef.current.style.setProperty(
        "--angle",
        `${(scrollTop / height) * 720}deg`
      );
    }
  };

  const playSound = () => {
    bgSoundRef.current && bgSoundRef.current.play();
    noiseSoundRef.current && noiseSoundRef.current.pause();
  };
  const playNoise = () => {
    noiseSoundRef.current && noiseSoundRef.current.play();
    bgSoundRef.current && bgSoundRef.current.pause();
  };

  useEffect(() => {
    if (isSoundOn) {
      playSound();
    } else {
      bgSoundRef.current && bgSoundRef.current.pause();
      noiseSoundRef.current && noiseSoundRef.current.pause();
    }

    return () => {};
  }, [isSoundOn]);

  useEffect(() => {
    screenRef.current.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      if (screenRef.current) {
        screenRef.current.removeEventListener("DOMContentLoaded", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (bgSoundRef.current && noiseSoundRef.current && isSoundOn) {
      if (currentlyVisibleChannel !== -1) {
        bgSoundRef.current.play();
        noiseSoundRef.current.pause();
      } else {
        bgSoundRef.current.pause();
        noiseSoundRef.current.play();
      }
    }
  }, [currentlyVisibleChannel]);

  return (
    <div className="oldTv-wrapper">
      <div className="oldTv">
        <div className="oldTv__frame">
          <div className="oldTv__screen" ref={screenRef}>
            {[...Array(channelCount).keys()].map((channelIndex) => (
              <InView
                key={channelIndex}
                threshold={0.6}
                root={screenRef.current}
                onChange={(inView) => {
                  if (inView) {
                    setCurrentlyVisibleChannel(channelIndex);
                  } else {
                    if (currentlyVisibleChannel === channelIndex) {
                      setCurrentlyVisibleChannel(-1);
                    }
                  }
                }}
              >
                {({ ref }) => (
                  <div ref={ref} className="reference-containers">
                    {channelIndex}
                  </div>
                )}
              </InView>
            ))}
          </div>
          <div className="oldTv__overlays">
            <ContentOverlay />
          </div>
          <div className="oldTv__overlays">
            {currentlyVisibleChannel === -1 && <StaticNoise />}
          </div>
          <div className="oldTv__overlays channel-container">
            {channels[currentlyVisibleChannel]}
          </div>
        </div>

        <div className="oldTv__panel flex flex-col">
          <div className="oldTv__radial flex flex-col w-full">
            <div className="flex justify-between items-center">
              <div className="radial-slider">
                <div className="knob" ref={angleRef}>
                  <div className="teeth" />
                  <div className="cap" />
                  <div className="indicator" />
                </div>
              </div>
            </div>
            <div className="oldTv__speaker"></div>
            {/* <div className="oldTv__logo">
              <div className="box--gradient gold">
                <p>DEVORIZON</p>
              </div>
            </div> */}
            <div className="w-full flex justify-center gap-3">
              <div className="oldTv__switch"></div>
              <div className="oldTv__switch"></div>
              <div className="oldTv__switch "></div>
            </div>
            <div className="oldTv__speaker mb-2"></div>
          </div>
          <div
            id="switch"
            onClick={() => {
              setIsSoundOn((prev) => !prev);
            }}
            className={`${isSoundOn ? "on" : ""} mt-2 mb-4`}
          ></div>
          <div className="oldTv__tuner w-full">
            <NavBar ref={scrollref} />
          </div>
        </div>
        <div className="oldTv__holders">
          <div className="oldTv__holder"></div>
          <div className="oldTv__holder"></div>
        </div>
      </div>
      <audio src={bgSound} ref={bgSoundRef} loop />
      <audio src={noiseSound} ref={noiseSoundRef} loop />
    </div>
  );
};

export default TVWrapper;
