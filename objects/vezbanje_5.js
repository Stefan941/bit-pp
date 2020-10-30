//Pretvoriti dati input string u novi string kojem je
//Svako drugo slovo veliko, i svako slovo A veliko


var input = "abrakadabra";

var velika = input.split("").map(function (el, i) {
    if (el === "a" || i % 2 === 1) { //ako je malo a ili ako je idex neparan, tj. svaki drugi
        return el.toUpperCase()
    } else {
        return el
    }
}).join("")
console.log(velika)


//Sva velika slova pretvoriti u zvezdice


var zvezdice = velika.split("").map(function (element) {
    if (element === element.toUpperCase()) {
        return "*"
    }
    return element
}).join("")

console.log(zvezdice)


//Izmedju dve zvezdice udariti space

var razmak = zvezdice.split("**").join("* *")
console.log(razmak)