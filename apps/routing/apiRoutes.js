var path = require("path");
var friends = require("../data/friends.js")


module.exports = function (app) {
    app.post("/api/survey", function (req, res) {
        console.log(req.body)
        var input = req.body.answers
        //console.log(input)
        friends.forEach(function (element) {
            var match = element["match"] = 0
            for (var i = 0; i < input.length; i++) {
                match += Math.abs(parseFloat("element.answers[i]") - parseFloat(input[i]))
            }
            console.log(match);
        })
        res.json({});
        // var input 
        console.log(req.body);
    });

};