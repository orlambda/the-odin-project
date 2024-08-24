function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(f) {
  // Check for finite number
  if (!Number.isFinite(f)) {
    return "ERROR"
  }
  // Check is above absolute zero
  if (f < -459.67) {
    return "ERROR"
  }
  var c = (f - 32) * 5/9
  return round(c, 1);


};

const convertToFahrenheit = function(c) {
  // Check for finite number
  if (!Number.isFinite(c)) {
    return "ERROR"
  }
  // Check is above absolute zero
  if (c < -273.15) {
    return "ERROR"
  }
  var f = (c * 9/5) + 32
  return round(f, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
