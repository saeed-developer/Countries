export const ALL_COUNTRIES = (filters) => `all/fields=${filters}`;
export const COUNTRY = (name, filter) =>
  `name/${name}?fullText=true&fields=${filters}`;
