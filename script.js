function convert(unit) {
  let celsius = parseFloat(document.getElementById('celsius').querySelector('input').value) || 0;
  let fahrenheit = parseFloat(document.getElementById('fahrenheit').querySelector('input').value) || 0;
  let kelvin = parseFloat(document.getElementById('kelvin').querySelector('input').value) || 0;

  if (unit === 'celsius') {
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
  } else if (unit === 'fahrenheit') {
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit - 32) * 5/9 + 273.15;
  } else if (unit === 'kelvin') {
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  }

  document.getElementById('fahrenheit').querySelector('input').value = roundNumber(fahrenheit).toFixed(2);
  document.getElementById('celsius').querySelector('input').value = roundNumber(celsius).toFixed(2);
  document.getElementById('kelvin').querySelector('input').value = roundNumber(kelvin).toFixed(2);
}

let celciusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

function roundNumber(number){
  return Math.round(number * 100) / 100;
}

celciusInput.addEventListener('input', function(){
  convert('celsius');
});

fahrenheitInput.addEventListener('input', function(){
  convert('fahrenheit');
});

kelvinInput.addEventListener('input', function(){
  convert('kelvin');
});
