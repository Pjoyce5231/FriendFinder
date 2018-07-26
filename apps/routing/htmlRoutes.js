//responds with html pages
// route without /api/ in it

var path = require("path");



module.exports = function (app) {
    app.get("/", function (req, res) {
        //respond with index.html
        res.sendFile(__dirname + "./public/index.html");
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
};