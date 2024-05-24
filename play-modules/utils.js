function genRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function genRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function celciusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

module.exports = { genRandomNumber, genRandomColor, celciusToFahrenheit };
