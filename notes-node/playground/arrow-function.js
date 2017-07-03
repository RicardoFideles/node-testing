var square = x => x * x;
console.log(square(9));

var user = {
    name : "Ricardo",
    sayHi : () => {
        console.log(arguments);
        console.log(`Hi. I'am ${this.name}`); //not worked
    },
    saiHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'am ${this.name}`); //worked
    }
};

user.sayHi(1,2,3);
