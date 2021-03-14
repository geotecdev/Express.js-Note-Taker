// dependencies
const express = require("express");

// express server config
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// local host port
const PORT =  process.env.PORT || 8080;

// this sets up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//api routes
require("../routes/apiRoutes")(app);
require("../routes/htmlRoutes")(app);

// express listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});