//Napisati funkciju, koja ce da primi neki stirng
// rezultat funkicje (return) treba da bude isti taj string
//sa razlikom u tome sto predzadnje slovo pretvara u 
//veliko slovo


//prvi nacin

function nekoIme(str) {
    var niz = str.split("")
    var poslednje = niz.pop()
    var pretposlednje = niz.pop()
    niz.push(pretposlednje.toUpperCase())
    niz.push(poslednje)
    return niz.join("")
}
console.log(nekoIme("klasifikacija"));


//drugi nacin

function aaa(str) {
    return str.split("").map(function (el, i, niz) {
        if (i === niz.length - 2) {
            return el.toUpperCase()
        }
        return el
    }).join("")
}
console.log(aaa("danas"))

//treci nacin bez fukcije

var rezultat = "neki nas string".split("").map(function (el, i, niz) {
    if (i === niz.length - 2) {
        return el.toLocaleUpperCase()
    }
    return el
}).join("")

var promena = nekoIme("Abrakadabra")
console.log(promena)