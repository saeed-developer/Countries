export const ALL_COUNTRIES = (filters) => `all?fields=${filters}`;
export const COUNTRY = (name, filters) =>
  `name/${name}?fullText=true&fields=${filters}`;
