const convertToCelsius = function(f) {
  let celcius = (f - 32) * 5/9;
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * 1.8) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
