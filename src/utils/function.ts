import { DEVICE_TYPE } from "./constants";

export function getDeviceScreen(width: number) {
  let hasTouchScreen = false;
  if (typeof navigator !== "undefined" && typeof window !== "undefined") {
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = (navigator as any).msMaxTouchPoints > 0;
    } else {
      const mQ = (window as any).matchMedia && matchMedia("(pointer:coarse)");

      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = (navigator as any).userAgent;

        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }
  }

  if (width < 640) {
    return DEVICE_TYPE.MOBILE;
  } else if (width <= 1024) {
    return DEVICE_TYPE.TABLET;
  } else {
    return !hasTouchScreen ? DEVICE_TYPE.DESKTOP : DEVICE_TYPE.TABLET;
  }
}
