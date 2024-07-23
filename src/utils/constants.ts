
export const LAYOUT_STORAGE_KEY = "VITE_LAYOUT";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initialStateLayout: Record<string, any> = {
  locale: "en-EN",
};

export enum DEVICE_TYPE {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}
