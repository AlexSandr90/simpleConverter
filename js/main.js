
let input           = document.getElementById('value');
let btn             = document.getElementById('convert');
let output          = document.getElementById('output');
let reset           = document.getElementById('reset');
let t               = input.value;


btn.addEventListener('click', getConvertTemperature );
reset.addEventListener('click', function () {
    output.innerHTML = '';
    input.value = '';
})


function getConvertTemperature() {

    let temperatureMetric   = input.value.substr(-1,1).toUpperCase();
    let temperatureValue    = Number(input.value.substr(0, input.value.length - 1));


    const farToCelsius      = Math.round((temperatureValue - 32) * 0.5555555555555556);
    const farToKelvin       = Math.round((temperatureValue + 459.67) / 1.8);

    const kelvinToCelsius   = Math.round(temperatureValue - 273.15);
    const kelvinToFar       = Math.round(temperatureValue * 1.8 - 459.67);

    const celsiusToFar      = Math.round(temperatureValue * 1.8 + 32);
    const celsiusToKelvin   = Math.round(temperatureValue + 273.15);


    const source = {
        'C': `{"F": "${celsiusToFar}", "K": "${celsiusToKelvin}"}`,
        'F': `{"C": "${farToCelsius}", "K": "${farToKelvin}"}`,
        'K': `{"C": "${kelvinToCelsius}", "F": "${kelvinToFar}"}`
    };

    output.innerHTML = source[temperatureMetric] || 'Error';

}


