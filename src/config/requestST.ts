import axios from "axios";
import QueryString from "qs";

export const requestST = axios.create({
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
  baseURL: "https://betrasua.onrender.com/",
  timeout: 50000,
});

requestST.defaults.paramsSerializer = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serialize: (params: Record<string, any>) => {
    return QueryString.stringify(params, { arrayFormat: "repeat" });
  },
};

requestST.interceptors.request.use((config) => {
  return config;
});

requestST.interceptors.response.use((response) => {
  if (response) return response;

  return response;
});
