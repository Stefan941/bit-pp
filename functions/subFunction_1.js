
// function sum() {
// var c = arguments[0] + arguments[1]
// return c;
// }
// var result = sum(1, 2);
// console.log(result)

//var rezultat = 0
//function sum() {
//  for (var i = 0; i < arguments.length; i++) {
//    rezultat = arguments[i] + rezultat
//}
//return rezultat
//}
//var konacno = sum(5, 5, 5)
//console.log(konacno)

//Task 1

//funcion Max(a, b){
//if (a > b) {
//} else {
//  return b;
//}
//}
//var rez = max(5, 3);
//console.log(rez);

//Task 2

//function a(a) {
//  if (a % 2 === 0) {
//    return "paran";
//}
//return "neparan"
//}

//console.log(a)

//Task 5

function a(n) {
    var text;
    for (var i = 0; i < n; i++) {
        text = " ";
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
                text += "*";
            } else {
                text += " ";
            }
        }
        console.log(text);
    }
}
var result = a(5);


//Task 6

function a() {
    var text;
    for (var i = 0; i < arguments.length; i++) {
        text = " "
        for (j = 0; j < arguments[i]; j++) {
            text += "*"
        }
        console.log(text);
    }
}

var result = a(5, 3, 7);

//Task 7

function dinosaurus(nesto) {
    var a = "" + nesto;
    return a.length;
}
console.log(dinosaurus(2345))


//Task 8

var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1]

function nekoImeNijeBitno(imeParametra) {
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            counter++;

        }
    }
    return counter
}
var rezultat = nekoImeNijeBitno()
console.log(rezultat)


//Task 9 ?

//var rezultat = 0
//function sum() {
// for (var i = 0; i < arguments.length; i++) {
//  if (rezultat[i] % 2 === 1)
//  rezultat += arguments[i] + rezultat
//  }
//  return rezultat
//}
//var konacno = sum(1, 3, 5)
//console.log(konacno)


//Task 10

// vraca broj pojavljivanja slova "a"
// prima STRING

function test(text) {
    var broj = 0;

    for (var i = 0; i < text.length; i++) { // broj elmenata u arreyu, duzina teksta izrazena kao broj
        var slovo = text[i]
        if (slovo === "a" || slovo === "A") {
            broj++;
        }
    }
    return broj;
}
var rezultat = test("Neki text ovde imamo: Abrakadabra")
console.log(rezultat)


//Task 11

// input: strin i broj
// output: string * broj

function tralala(text, broj) {
    var rezultat = ""

    for (var i = 0; i < broj; i++) {
        rezultat = rezultat + text
    }
    console.log(rezultat) // deklarisana funkcija
}
tralala("abc", 3) // poziv funkcije














