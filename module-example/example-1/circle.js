/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("circle module");
const { PI } = Math;

var area = function (r) {
    return PI * r * r;
}
exports.a = function (r) {
    area(r);
}

exports.circumference = (r) => 2 * PI * r;

