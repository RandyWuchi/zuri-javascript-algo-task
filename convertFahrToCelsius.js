const convertFahrToCelsius = (deg) => {
  let parsedDeg;

  if (!Array.isArray(deg)) {
    parsedDeg = parseInt(deg);
  }
  if (isNaN(parsedDeg)) {
    return `${JSON.stringify(deg)} is not a valid number but a/an ${
      Array.isArray(deg) ? "array" : typeof deg
    }`;
  }

  let celsius = ((deg - 32) * 5) / 9;
  let c = celsius.toFixed(4);
  console.log(`${c}\xB0C`);
  return `${c}\xB0C`;
};

console.log(convertFahrToCelsius(0));
