export const seprator = (number) => {
  const arrayOfNumbers = String(number).split("");
  let output = "";
  while (arrayOfNumbers.length > 3) {
    const sliced = arrayOfNumbers.splice(
      arrayOfNumbers.length - 3,
      arrayOfNumbers.length
    );

    const seprated = "," + sliced.join("");

    output = seprated + output;
  }
  return arrayOfNumbers.join("") + output;
};
