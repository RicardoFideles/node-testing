const request = require('request');

var geocodeAddress = (address) => {

    var encondedAddress = encodeURIComponent(address);

    var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encondedAddress}`;

    request({ 
        url : url,
        json : true,
    }, (error, response, body) => {

        if (error) {
            console.log('Something went wrong, try again latter');
        } else {
            if (response.statusCode !== 200) {
                console.log('Something went wrong, try again latter');
                return false;
            }
            console.log(JSON.stringify(body, undefined, 2));
            if (body.status === 'ZERO_RESULTS') {
                console.log('Address not found!');
            } else {
                console.log(`Address: ${body.results[0].formatted_address}`);
                console.log(`latitude: ${body.results[0].geometry.location.lat}`);
                console.log(`longitude: ${body.results[0].geometry.location.lng}`);
            }
        }
    });
}

module.exports = {
    geocodeAddress
};