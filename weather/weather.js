const request = require('request');

var weatherApp = (lat, long, callback) => {

    request({
        url: `https://api.darksky.net/forecast/dfe49c4eb60f5764ac412e163f94809d/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && body.currently.temperature !== '') {
            callback(undefined,{temperature:body.currently.temperature,
            apparentTemperature :body.currently.apparentTemperature            
            });
        } else {
            callback('Unable to connect to server');
        } 
    });
};

module.exports = {
        weatherApp
}