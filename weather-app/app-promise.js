const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encondedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encondedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    console.log(response.data.results[0].formatted_address);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var apiKey = process.env.DARKSKY_SECRET;
    var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

    return axios.get(weatherUrl);

})
.then ((response) => {
    var temperature = Math.round((response.data.currently.temperature - 32) / 1.8);
    var apparentTemperature = Math.round((response.data.currently.apparentTemperature - 32) / 1.8);
    console.log(`Temperature : ${temperature} Celsius`);
    console.log(`ApparentTemperature : ${apparentTemperature} Celsius`);
}) 
.catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
});





