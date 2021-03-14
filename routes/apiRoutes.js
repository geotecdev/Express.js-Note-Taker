//dependencies
const path = require("path");
const fs = require("fs");

// load data
let notes = require("../data/notesData.json");


// routing
module.exports = (app) => {

    // GET notes data
    app.get("/api/notes", (req, res) => res.json(notes));

    
}