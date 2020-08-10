import axios from "axios";

const inDevelopment = true;

export const MyApiClient = axios.create({
  baseURL: inDevelopment
    ? `http://localhost:5000`
    : "https://seattle-produce-delivery.herokuapp.com/api",
});
