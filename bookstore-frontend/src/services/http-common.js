import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3334",
  headers: { "content-type": "application/json" },
});

export default http;
