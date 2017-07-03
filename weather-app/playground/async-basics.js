console.log('Starting app');

setTimeout(function() {
    console.log('Inside of callback');
}, 3000);

setTimeout(function() {
    console.log('Second of callback');
}, 0);

var x = 1;
var y = x + 9;

console.log(`y is ${y}`);

var add = (a,b) => {
    var total = a + b;
    return total;
}

var res = add(3,8);

console.log(res);

console.log('Finishing app');