// var obj = {
//     name : 'Ricardo'
// };

// var stringObject = JSON.stringify(obj);

// console.log(typeof stringObject);
// console.log(stringObject);

// var personString = '{"name":"Ricardo", "age":32}';
// var person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);

const fs = require('fs');

var originalNote = {
    title : 'Some Titlpe',
    body : 'Some Body'
};

const fileName = 'notes.json';

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync(fileName, originalNoteString);

var noteString = fs.readFileSync(fileName);

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

 