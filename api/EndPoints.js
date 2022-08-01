export const ALL_COUNTRIES = (filters) => `all?fields=${filters}`;
export const COUNTRY = (name, filters) =>
  `name/${name}?fullText=true&fields=${filters}`;
export const FIND_LOCATION = (codes, filters) =>
  `https://restcountries.com/v2/alpha?codes=${codes}&fields=${filters}`;
