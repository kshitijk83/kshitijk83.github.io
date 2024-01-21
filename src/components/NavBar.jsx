import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "../css/nav-bar.css";
import ruler from "../assets/Ruler.svg";

const UP_RULER = {
  full: 10,
  half: 20,
};

const DOWN_RULER = {
  full: 5,
  half: 10,
};

const NavBar = forwardRef(function NavBar({ scrollPosition }, ref) {
  const [upRuler, setUpRuler] = useState(UP_RULER);
  const [downRuler, setDownRuler] = useState(DOWN_RULER);

  useLayoutEffect(() => {
    if (window.innerWidth <= 800) {
      setUpRuler({ full: 5, half: 10 });
      setDownRuler({ full: 2, half: 4 });
    } else if (window.innerWidth <= 400) {
      setUpRuler({ full: 5, half: 5 });
      setDownRuler({ full: 2, half: 3 });
    }
  }, []);
  // const handleScroll = () => {
  //   const scrollTop =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   ref.current = (scrollTop / height) * 100;
  //   // setScrollPosition((scrollTop / height) * 100);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="nav-bar">
      <div className="needle-container p-2">
        <div className="w-full h-full border-black border-2 rounded-lg">
          <div className="flex flex-col justify-around flex-wrap w-full h-full">
            <div className="w-full h-[50%]">
              <div className="flex justify-between pl-1 pr-1">
                {/* small ruler */}
                {Array(upRuler.full)
                  .fill(0)
                  .map((_, index) => (
                    <>
                      <div className="w-[3px] rounded-b-lg h-[20px] bg-black"></div>
                      {Array(upRuler.half)
                        .fill(0)
                        .map((_, idx) => (
                          <div className="w-[3px] rounded-b-lg h-[10px] bg-black"></div>
                        ))}
                    </>
                  ))}
              </div>
            </div>
            <div className="w-full h-[50%]">
              <div className="flex justify-between items-end h-full pl-1 pr-1">
                {/* big ruler */}

                {Array(downRuler.full)
                  .fill(0)
                  .map((_, index) => (
                    <>
                      <div className="w-[3px] rounded-t-lg h-[20px] bg-black"></div>
                      {Array(upRuler.half)
                        .fill(0)
                        .map((_, idx) => (
                          <div className="w-[3px] rounded-t-lg h-[10px] bg-black"></div>
                        ))}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="needle-range">
          <div className="needle" ref={ref}></div>
          <div className="m-auto h-full flex items-center"></div>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
