import axios from "axios";

export const MyApiClient = axios.create({
  baseURL = process.env.NODE_ENV === inDevelopment
    ? `http://localhost:5000/`
    : "https://seattle-produce-delivery.herokuapp.com/",
  baseURL
});
