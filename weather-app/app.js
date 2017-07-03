const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        a : {
            demand : true,
            alias : 'address',
            describe : 'Address to fetch weather for',
            string : true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var apiKey = process.env.DARKSKY_SECRET;
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
console.log(apiKey);
//console.log(process.env);


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
