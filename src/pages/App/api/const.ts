import axios from "axios";

const baseURL = "https://startup-summer-2023-proxy.onrender.com";

const queryHeaders = {
  "Content-type": "application/json",
  Accept: "text/plain",
  "Access-Control-Allow-Origin": "*",
  "x-secret-key": import.meta.env.VITE_HEADER,
  Authorization: `Bearer ${localStorage.getItem("token")?.toString()}`
};

const baseAuthURL = `${baseURL}/2.0/oauth2`;

export const authQueryInstance = axios.create({
  baseURL: baseAuthURL,
  headers: queryHeaders
});
