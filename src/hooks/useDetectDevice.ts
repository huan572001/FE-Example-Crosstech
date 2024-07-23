import { getDeviceScreen } from "@/utils/function";
import { useEffect, useState } from "react";

export default function useDetectDevice() {
  const [deviceType, setDeviceType] = useState("desktop");
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  useEffect(() => {
    if (windowSize) {
      const device = getDeviceScreen(windowSize.width || 0);
      setDeviceType(device);
    }
  }, [windowSize]);

  return { deviceType };
}
