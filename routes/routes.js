var router = require("router");

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
};