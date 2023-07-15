const convertToCelsius = function(temp) { // x °F ≘ (x − 32) × 5 / 9
  let conversion;
  conversion = (temp - 32) * (5 / 9);
  Math.round(conversion * 10) / 10;
  return conversion;
};

const convertToFahrenheit = function(temp) { // x °C ≘ (x × 9 / 5 + 32)
  let conversion;
  conversion = (temp * 9) / (5 + 32);
  Math.round(conversion * 10) / 10;
  return conversion;
};
convertToCelsius(140);
convertToFahrenheit(32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
