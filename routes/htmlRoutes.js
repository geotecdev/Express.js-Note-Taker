//dependencies
const path = require("path");
const fs = require("fs");

module.exports = (app) => {

    //http://localhost:8080/tables

    //landing page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    // notes page
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../notes.html"));
    });
}