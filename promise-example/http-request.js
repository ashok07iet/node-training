var http = require('http');
http.get('http://localhost:3000/customers', function (res) {
    var data = "";
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(JSON.parse(data));
    });
});
