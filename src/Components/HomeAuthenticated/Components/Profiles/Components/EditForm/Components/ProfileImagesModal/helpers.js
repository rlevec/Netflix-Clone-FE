import {useEffect} from "react";

export const useHandleResize = (mainRef, dimensions, setDimensions, setMainDivWidth) => {
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  useEffect(() => {
    if (mainRef) {
      if (mainRef.current?.clientWidth) setMainDivWidth(mainRef.current.clientWidth)
    }
  }, [dimensions?.width])
}