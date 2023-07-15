const convertToCelsius = function(temp1) { // x °F ≘ (x − 32) × 5 / 9
  let conversion;
  conversion = (temp1 - 32) * (5 / 9);
  conversion = Math.round(conversion * 10) / 10;
  return conversion;
};

const convertToFahrenheit = function(temp2) { // x °C ≘ (x × 9 / 5 + 32)
  let conversion;
  conversion = temp2 * (9 / 5) + 32;
  conversion = Math.round(conversion * 10) / 10;
  return conversion;
};
convertToCelsius(-100);
convertToFahrenheit(32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
