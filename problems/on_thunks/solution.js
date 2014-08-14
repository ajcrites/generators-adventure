var fs = require("fs");

module.exports = function (filename) {
    return function (done) {
        fs.readFile(filename, done);
    };
};
