const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};

var argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('list', 'Print all notes')
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created successfully!");
        notes.logNote(note);
    } else {
        console.log("Note with same title already exist. Please choose another title.")
    }
} 
else if (command === 'remove') {
    var notesRemoved = notes.removeNote(argv.title);
    var message = notesRemoved ? "Note removed successfully" : "Note not found";
    console.log(message);
} 
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note has read!");
        notes.logNote(note);
    } else {
        console.log("Note not found.")
    }
} 
else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach( note => notes.logNote(note));
} 
else {
    console.log('No commands detected...');
}
