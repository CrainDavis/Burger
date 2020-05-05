// dependencies
const express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// serve static content for the app from the "public" directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give server access to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// set up application to listen on port
app.listen(PORT, function() {
    console.log("Server listening on http://localhost:" + PORT);
});