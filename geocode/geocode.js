
//loading the request lib
const request = require('request');

var geocodeAddress = (addr, callback) => {

    var enaddr = encodeURIComponent(addr); //this will add %20 in the place of the spaces.

    //it takes two arguments
    //arguments, you can get it from the location that is exactly the same..
    //https://www.npmjs.com/package/request 
    request({
        //url: `https://maps.googleapis.com/maps/api/geocode/json?address=Richmond Downtown Virginia`,
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${enaddr}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to the google Server');
            //console.log('Unable to connect to the google Server');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to connect to find address');
            // console.log('Unable to connect to find address');
        }
        else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng

            });
        }

    });
};

/***********************************************************************************/
module.exports = {
    
    geocodeAddress,
    
}

