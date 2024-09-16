import axios from "axios";

/** set the base URL for axios requests */
axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// To avoid any CORS errors when sending cookies
axios.defaults.withCredentials = true;

const config = {
  timeout: 1500,
  baseUrl: "http://localhost:8080/",
};

export const axiosBase = axios.create(config);
/** create two instances of axios to attach interceptors
    for requests and responses. */
export const axiosReq = axios.create();
export const axiosRes = axios.create();
