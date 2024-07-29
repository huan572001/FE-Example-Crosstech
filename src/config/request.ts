import axios from "axios";
import QueryString from "qs";

export const request = axios.create({
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 50000,
});

request.defaults.paramsSerializer = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serialize: (params: Record<string, any>) => {
    return QueryString.stringify(params, { arrayFormat: "repeat" });
  },
};

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use((response) => {
  if (response) return response;

  return response;
});
