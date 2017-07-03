const request = require('request');

request({ 
    url : 'http://maps.googleapis.com/maps/api/geocode/json?address=Rua%20Senador%20Dantas,%2085,%20Rio%20de%20Janeiro',
    json : true,
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});