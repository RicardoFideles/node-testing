const request = require('request');

var geocodeAddress = (address, callback) => {

    var encondedAddress = encodeURIComponent(address);

    var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encondedAddress}`;

    request({
        url: url,
        json: true,
    }, (error, response, body) => {

        if (error) {
            callback('Something went wrong, try again latter');
        } else {
            if (response.statusCode !== 200) {
                callback('Something went wrong, try again latter');
                return false;
            }
            if (body.status === 'ZERO_RESULTS') {
                callback('Address not found!');
            } else {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        }
    });
}

module.exports = {
    geocodeAddress
};