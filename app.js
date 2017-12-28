const request = require('request');

//declaring the yargs app to the application..
const yargs = require('yargs');

//declaring the geocode information..
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            alias: 'address',
            describe: 'address to fetch weather for',
            demand: true,
            String: true //this will tell yargs that address is a string
        }

    })
    .help()
    .alias('help', 'h')
    .argv;

//console.log(argv);
var addr = argv.a;

geocode.geocodeAddress(addr, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        weather.weatherApp(results.Latitude, results.Longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`its currently ${weatherResults.temperature}. It feels like : ${weatherResults.apparentTemperature}`);
            }
        });
    }
});




//dfe49c4eb60f5764ac412e163f94809d