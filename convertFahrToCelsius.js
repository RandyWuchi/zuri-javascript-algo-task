const convertFahrToCelsius = (deg) => {
  if (typeof deg !== "number") {
    return `${JSON.stringify(
      deg
    )} is not a valid number but a/an ${typeof deg}`;
  }

  let celsius = ((deg - 32) * 5) / 9;
  let c = celsius.toFixed(4);
  return `${c}\xB0C`;
};

convertFahrToCelsius({ temp: 0 });
