var http = require('http');
var server = http.createServer();
var URL = require('url');
var customers = require('./data/customer');
var orders = require('./data/order');
server.on('request', function (req, res) {
    var response = "";
    res.setHeader('Access-Control-Allow-Origin', '*');
    var url = URL.parse(req.url, true);
    if (url.pathname === '/') {
        response = "home";
        res.end(JSON.stringify(response));
    } else if (url.pathname === "/user") {
        response = { 'name': "ram", "age": 30 };
        res.end(JSON.stringify(response));
    } else if (url.pathname === '/address') {
        setTimeout(function () {
            response = { 'city': "banglore", "state": "karnatka" };
            res.end(JSON.stringify(response));
        }, 20000);
    } else if (url.pathname === '/customers') {
        if (Object.keys(url.query).length !== 0 && url.query.name) {
            for (i = 0; i < customers.length; i++) {
                if (customers[i].FirstName === url.query.name) {
                    return res.end(JSON.stringify(customers[i]));
                }
            }
            return res.end(JSON.stringify({}));
        } else {
            res.end(JSON.stringify(customers));
        }

    } else if (url.pathname === '/orders') {
        if (Object.keys(url.query).length !== 0 && url.query.cusId) {
            for (i = 0; i < orders.length; i++) {
                if (orders[i].CustomerId == url.query.cusId) {
                    return res.end(JSON.stringify(orders[i]));
                }
            }
            return res.end(JSON.stringify({}));
        } else {
            res.end(JSON.stringify(orders));
        }
    }

});
server.listen(3000, function () {
    console.log("server listen on port 3000");
});