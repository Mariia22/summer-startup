import axios from "axios";

const baseURL = "https://startup-summer-2023-proxy.onrender.com/2.0/";

const queryHeaders = {
  "Content-type": "application/json",
  Accept: "text/plain",
  "Access-Control-Allow-Origin": "*",
  "x-secret-key": import.meta.env.VITE_HEADER,
  "X-Api-App-Id": import.meta.env.VITE_CLIENT_SECRET
};

export const queryInstance = axios.create({
  baseURL: baseURL,
  headers: queryHeaders
});

export const networkMessages = {
  notAuthorization: "You are not authorized. Please, reload the page"
};
