const convertFahrToCelsius = (deg) => {
  if (typeof deg !== "number") {
    return `${JSON.stringify(
      deg
    )} is not a valid number but a/an ${typeof deg}`;
  }

  let celsius = ((deg - 32) * 5) / 9;
  return `${celsius}\xB0C`;
};

convertFahrToCelsius({ temp: 0 });
