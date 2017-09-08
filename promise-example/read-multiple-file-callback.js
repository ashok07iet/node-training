var fs = require('fs');
fs.readFile("../data/customer.json", function (err, data) {
    console.log("first file");
    console.log(data.toString());
    fs.readFile("../data/order.json", function (err, data) {
        console.log("order file");
        console.log(data.toString());
        fs.readFile("../data/state.json", function (err, data) {
            console.log("state file");
            console.log(data.toString());
        });
    })
});

var Promise = require('bluebird');
var fsp = Promise.promisifyAll(require('fs'));
var p = fsp.readFileAsync("../data/customer.json");
p.then(function (data) {
    console.log("first file promise");
    console.log(data.toString());
    return fs.readFileAsync("../data/order.json")
}).then(function (data) {
    console.log("second file promise");
    console.log(data.toString());
    return fs.readFileAsync("../data/state.json")
}).then(function (data) {
    console.log("third file promise");
    console.log(data.toString());
}).catch(function (error) {
    console.log(error);
})
