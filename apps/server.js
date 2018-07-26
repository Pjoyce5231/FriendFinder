var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//show the path to the apiRoutes.js and htmlRoutes.js page
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//show the path to the api routes js page

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});