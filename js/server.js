// dependencies
const express = require("express");

// express server config
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// local host port
const PORT = 8080;

//api route
require('./api/notesData')(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});