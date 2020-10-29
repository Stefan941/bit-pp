// Napraviti NIZ studenata (stringova sa imenima studenata)
// Napraviti NIZ bodova studenta (0-100)
// Zatim kreirati treci niz, koji ce da sadrzi objekte koji predstavljaju studente


// input: niz bodova, niz imena
// output: niz studenta


var imena = ["Pera", "Jovan", "Maja", "Zarko"]
var bodovi = [68, 75, 85, 74]
var studenti = []

for (var i = 0; i < imena.length; i++) {
    var student = {                         // novi objekat Student mora da stoji unutar petlje
        name: imena[i],
        points: bodovi[i]
    }
    studenti.push(student)
}
console.log(studenti)


// Proci kroz niz studenta i dodeliti in novi propery 
// PASSED, koji govori o tome da li je student 
// polozio kurs, ako ima manje od 75 bodova, 
// nije polozio, u suprotnom je polozio


for (var i = 0; i < studenti.length; i++) {
    if (studenti[i].points < 75) {
        studenti[i].passed = false
    } else {
        studenti[i].passed = true
    }
}
console.log(studenti)


// Filtrirati niz studenata tako da nam ostanu
// samo oni koji su uspesno polozili kurs

var uspesniStudenti = []

for (var i = 0; i < studenti.length; i++) {
    if (studenti[i].passed) {
        uspesniStudenti.push(studenti[i])
    }
}
console.log(uspesniStudenti) // I nacin



var uspeniStudenti2 = studenti.filter(function (/*el*/student) {     // (prvi parametar EL - element, drugi parametar I - index tog niza, treci parametar A - ceo NIZ za koji se f-ja izvrsava)
    if (/*el*/student.passed === true)
        return true         // da bi ostao u nizu
    else {
        return false        // ako nije prosao
    }
})

console.log(uspeniStudenti2) // II nacin