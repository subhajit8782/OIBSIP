function temp_convert() {
  var temperature = parseFloat(document.getElementById("temp_input").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var convertedValue = 0;
  var resultUnit;

  switch (fromUnit) {
    case "Celcius":
      if (toUnit === "Fahrenheit") {
        convertedValue = temperature * 9 / 5 + 32;
        resultUnit = "F";
      } else if (toUnit === "Kelvin") {
        convertedValue = temperature + 273.15;
        resultUnit = "K";
      } else {
        convertedValue = temperature;
        resultUnit = "C";
      }
      break;

    case "Fahrenheit":
      if (toUnit === "Celcius") {
        convertedValue = (temperature - 32) * 5 / 9;
        resultUnit = "C";
      } else if (toUnit === "Kelvin") {
        convertedValue = (temperature - 32) * 5 / 9 + 273.15;
        resultUnit = "K";
      } else {
        convertedValue = temperature;
        resultUnit = "F";
      }
      break;

    case "Kelvin":
      if (toUnit === "Celcius") {
        convertedValue = temperature - 273.15;
        resultUnit = "C";
      } else if (toUnit === "Fahrenheit") {
        convertedValue = (temperature - 273.15) * 9 / 5 + 32;
        resultUnit = "F";
      } else {
        convertedValue = temperature;
        resultUnit = "K";
      }
      break;
  }
  document.getElementById("display").innerHTML =
    convertedValue.toFixed(2) + " <sup>" + resultUnit + "</sup>";
}
