var input = require('../../input'),
    lorem = require('lorem-ipsum');

module.exports = input(Array.apply(null, {length: 1}).map(function() {
  return lorem();
})).wrap(function(input, thunk) {
  var assert = require('assert'),
    os = require("os"),
    fs = require("fs"),
    path = require("path"),
    tmpFile = path.join(os.tmpDir(), "_generators-adventure_" + process.pid + ".txt");

    fs.writeFile(tmpFile, input, "utf8", function () {
        thunk(tmpFile)(function (err, contents) {
            console.log(contents.toString());
        });
    });
});
