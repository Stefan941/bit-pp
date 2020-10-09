
// function sum() {
// var c = arguments[0] + arguments[1]
// return c;
// }
// var result = sum(1, 2);
// console.log(result)

var rezultat = 0
function sum() {
    for (var i = 0; i < arguments.length; i++) {
        rezultat = arguments[i] + rezultat
    }
    return rezultat
}
var konacno = sum(5, 5, 5)
console.log(konacno)












