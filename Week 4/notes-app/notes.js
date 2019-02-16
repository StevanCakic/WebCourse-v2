const fs = require("fs");

function fetchNotes() {
    try {
        const notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    }
    catch (e) {
        console.log(e);
        return [];
    }
}

function saveNotes(notes) {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

function logNote(note) {
    console.log("------");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

function addNote(title, body) {
    let notes = [];
    const note = { title, body };
    notes = fetchNotes();
    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    })

    if (duplicateNotes.length <= 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

function getAll() {
    return fetchNotes();
}

function getNote(title) {
    let notes = fetchNotes();
    const filteredNotes = notes.filter(note => {
        return title === note.title;
    })
    return filteredNotes[0];
}

function removeNote(title) {
    let notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
    return filteredNotes < notes;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}