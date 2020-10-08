// Task 0 - for loop

//var broj = 0;
var maxBroj = 10;

for (var broj = 0; broj < 11; broj++) {
    console.log(broj * broj);
}

// Task 0 - while loop

var broj = 0;
var maxBroj = 10;

while (broj <= maxBroj) {
    console.log(broj * broj);
    broj++;
}

//Task 0 - while loop (drugi nacin)

var broj = 0;

while (broj <= maxBroj) { //kostur, dokle god je uslov zadovoljen vrti loop
    console.log(broj * broj); //mi zelimo da radimo console.log
    broj++;
}


//Task 1 - while od 0 do 15

var broj = 0;
var maxBroj = 16;

while (broj < maxBroj) {
    if (broj % 2 === 1) {
        console.log("Odd")
    } else {
        console.log("Even")
    }
    broj++;
}

//Task 2 

var zbir = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        zbir += i;
    }
}
console.log(zbir)


//Task 3 

var niz = [1, 2, 3, 4, 5, 6, 7, 8]
var zbir = 0
var proizvod = 1

for (var i = 0; i < niz.length; i++) {
    zbir += niz[i]
    proizvod *= niz[i]

}
console.log("Iznos1:" + zbir)
console.log("Iznos2:" + proizvod)













