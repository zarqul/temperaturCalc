function calcFromCelcius(celcius) {
  var fahrenheit = parseFloat(celcius) * parseFloat(1.8) + parseFloat(32);
  var kelvin = parseFloat(celcius) + parseFloat(273.15);
  return {'f': parseInt(fahrenheit), 'k': parseInt(kelvin)};
}

function calcFromFahrenheit(fahrenheit) {
  var celcius = (parseFloat(fahrenheit) - parseFloat(32)) * 5/9;
  var kelvin = parseFloat(celcius) + parseFloat(273.15);
  return {'c': parseInt(celcius), 'k': parseInt(kelvin)};
}

function calcFromKelvin(kelvin) {
  var celcius = parseFloat(kelvin) - parseFloat(273.15);
  var fahrenheit = parseFloat(celcius) * parseFloat(1.8) + parseFloat(32);
  return {'c': parseInt(celcius), 'f': parseInt(fahrenheit)};
}

// Functions called from field in html
function fromCelcius() {
  var celcius = document.getElementById('celciusField').value;
  if (celcius === ''){
    var calcs = {'f': '', 'k': ''};
  } else {
    var calcs = calcFromCelcius(celcius);
  }
  document.getElementById('fahrenheitField').value = calcs['f'];
  document.getElementById('kelvinField').value = calcs['k'];
}

function fromFahrenheit() {
  var fahrenheit = document.getElementById('fahrenheitField').value;
  if (fahrenheit === ''){
    var calcs = {'c': '', 'k': ''};
  } else {
    var calcs = calcFromFahrenheit(fahrenheit);
  }
  document.getElementById('celciusField').value = calcs['c'];
  document.getElementById('kelvinField').value = calcs['k'];
}

function fromKelvin() {
  var kelvin = document.getElementById('kelvinField').value;
  if (kelvin === ''){
    var calcs = {'c': '', 'f': ''};
  } else {
    var calcs = calcFromKelvin(kelvin);
  }
  document.getElementById('celciusField').value = calcs['c'];
  document.getElementById('fahrenheitField').value = calcs['f'];
}
