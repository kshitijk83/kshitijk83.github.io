import { useState, useEffect, useRef } from "react";
import "./App.css";
import { InView } from "react-intersection-observer";
import ContentOverlay from "./components/ContentOverlay";
import NavBar from "./components/NavBar";
import StaticNoise from "./components/StaticNoise";
import Main from "./components/Main";
import TVWrapper from "./components/TVWrapper";

function App() {
  // Put as many components as you like here
  const channels = [
    <div className="">intro</div>,
    <div className="">Experience</div>,
    <div className="">Projects</div>,
    <div className="">Other Things</div>,
    // <div className="pt-[200px] max-md:pt-0">Content 4</div>,
  ];

  const channelCount = channels.length;
  const [currentlyVisibleChannel, setCurrentlyVisibleChannel] = useState(0);

  // const [scrollPosition, setScrollPosition] = useState(-1);
  const scrollref = useRef(null);

  const handleScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // scrollref.current = (scrollTop / height) * 100;
    if (scrollref.current) {
      scrollref.current.style.setProperty(
        "left",
        `${(scrollTop / height) * 100}%`
      );
    }
    // setScrollPosition((scrollTop / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <TVWrapper></TVWrapper>
    </>
  );
}

export default App;
