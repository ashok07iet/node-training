Promise = require('bluebird');

function executeAfterSomeTime(name, ms) {
    function promisefn(resolve, reject) {
        var msg;
        setTimeout(function () {
            msg = "hello " + name;
            reject("error happen");
        }, ms);
    }
    return new Promise(promisefn);
};

var result = executeAfterSomeTime("ashok", 100);
result.then(function (data) {
    console.log(data);
}, function (err) {
    console.log("error" + err);
});