const fs = require('fs');
const fileName = 'notes.json';

var fetchNotes = () => {
    try {
        var result = fs.readFileSync(fileName);
        return notes = JSON.parse(result);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(fileName, JSON.stringify(notes));
};

var add =  (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
       saveNotes(notes);
       return note;
    } else {
        console.log('Duplicated note.')
    }
};


var list  = () => {
    var notes = fetchNotes();
    console.log(notes);
    return notes;
}

var read  = (title) => {
    console.log('read note with title : ', title);
    var notes = fetchNotes();
    return notes.filter((note) => note.title === title);
}

var remove  = (title) => {
    console.log('remove note with title : ', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
}

module.exports = {
    add,
    list,
    read,
    remove
}
