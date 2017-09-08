var fs = require('fs');
fs.readFile("../data/customer.json", print);
console.log("readed first file");
var customer = fs.readFileSync('../data/order.json');
console.log(customer.toString());
console.log("readed second file");

function print(error, data) {
    console.log(data.toString());
}