console.log('Starting app.js');
// const os = require('os');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

/*
    node app.js add --title=secret --body="this is my note"
    node app.js list
    node app.js remove --id=1
    node app.js read --id=1
*/

switch(command) {
    case 'add': {
        var note = notes.add(argv.title, argv.body);
        if (note) {
            console.log('note created');
            console.log(note.title);
            console.log(note.body);
        }else {
            console.log('note title taken.');
        }
        break;
    }
    case 'list': {
        notes.list();
        break;
    }
    case 'read': {
        var note = notes.read(argv.title);
        console.log(note);
        break;
    }
    case 'remove': {
        notes.remove(argv.title);
        break;
    }
}


//var user = os.userInfo();

// var msg = `Hello ${user.username}! You are ${notes.age}.`;

//writeMsgOnfile(msg);

// function writeMsgOnfile (msg) {
//     fs.appendFile('greetings.txt', msg, function(err) {
//         if (err) {
//             console.log('The file could not be written');
//         }
//     });
// }

// var result = notes.addNote();
// console.log(result);

// result = notes.sum(1, 2);
// console.log('The sum of 1 + 2 is :' + result);

// console.log(_.isString('a'));
// console.log(_.isString(2));

// var filteredArray = _.uniq([1,2,2,2,3,1, 'Ricardo', 'Ricardo']);
// console.log(filteredArray);