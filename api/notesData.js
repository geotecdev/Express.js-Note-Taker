class Note {
    constructor(summary, noteText) {
        this.summary = summary;
        this.noteText = noteText;
    }
}

const notesData = [ new Note("example note", "this is an example note for ui testing") ];

module.exports = notesData;