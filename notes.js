const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(err) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    //Checking for the files with same title
    var duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var removeNote = (title) => {
    var notesBeforeRemoved = fetchNotes();
    var notesAfterRemoved = notesBeforeRemoved.filter(note => note.title !== title);
    saveNotes(notesAfterRemoved);

    return notesBeforeRemoved.length !== notesAfterRemoved.length; 
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
};

var getAll = () => {
    return fetchNotes();  
};

var logNote = (note) => {
    console.log("-----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll,
    logNote
};


