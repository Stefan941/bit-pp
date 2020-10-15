// Write a program that draws a square of a given size. 
// For example,  if the size of square is 5 the program should draw: 
// *****
// *   *
// *   *
// *   *
// *****

// input: broj n
// output: -

function draw(n) {
    var ispis = ""
    for (var i = 0; i < n; i++) {

        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                ispis = ispis + "*"
            } else {
                ispis = ispis + " "
            }
        }
        console.log(ispis)
        ispis = ""
    }
}

draw(5);


function zzz(n) {
    var ispis = "";
    for (var i = 0; i < 3; i++) {

        for (var j = 0; j < 7; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                ispis = ispis + "*"
            }
        }
        console.log(ispis)
        ispis = ""
    }
}
zzz(10)