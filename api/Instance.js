import axios from "axios";
export const countriesInstance = axios.create({
  baseURL: "https://restcountries.com/v2/",
});
