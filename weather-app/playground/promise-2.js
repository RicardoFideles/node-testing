const request = require('request');
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        
        var encondedAddress = encodeURIComponent(address);

        var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encondedAddress}`;

        request({
            url: url,
            json: true,
        }, (error, response, body) => {

            if (error) {
                reject('Something went wrong, try again latter');
            } else {
                if (response.statusCode !== 200) {
                    reject('Something went wrong, try again latter');
                    return false;
                }
                if (body.status === 'ZERO_RESULTS') {
                    reject('Address not found!');
                } else {
                    resolve ({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    })
                }
            }
        });
    })
};


geocodeAddress('24020091').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});