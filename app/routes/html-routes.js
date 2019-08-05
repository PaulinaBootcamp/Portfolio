var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/contact.html"));
    });


    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/portfolio.html"));
    });


};