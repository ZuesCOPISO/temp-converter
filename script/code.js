function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = parseFloat(fahrenheitInput.value);
  
    if (!isNaN(celsius)) {
      var convertedFahrenheit = celsius * 9 / 5 + 32;
      fahrenheitInput.value = convertedFahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
      var convertedCelsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = convertedCelsius.toFixed(2);
    }
  }