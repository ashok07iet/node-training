var Promise = require('bluebird');
function async1(data) {
    function promisefn(res, rej) {
        setTimeout(function () {
            var msg = 'hello ' + data
            console.log(msg);
            res(msg);
        }, 100);
    }
    return new Promise(promisefn);
}
function sync(data) {
    return "how" + data;
}
function async3(data) {
    function promisefn(res, rej) {
        setTimeout(function () {
            var msg = 'bye ' + data;
            console.log(msg);
            return res(msg);
        }, 100);
    }
    return new Promise(promisefn);
}
async1("ashok")
    .then(sync)
    .then(async3)
    .catch(function (err) {
        console.log(err);
    });
