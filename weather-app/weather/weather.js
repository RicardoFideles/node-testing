const request = require('request');

var getWeather = (lat, lng, callback) => {

    var apiKey = process.env.DARKSKY_SECRET;

    var url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

    request({
        url: url,
        json: true,
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var temperature = Math.round((body.currently.temperature - 32) / 1.8);
            var apparentTemperature = Math.round((body.currently.apparentTemperature - 32) / 1.8);
            callback(undefined, {
                temperature,
                apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
}

module.exports = {
    getWeather
}