//1. Napisati konstruktorsku funkciju koja kreira objekat Osoba
//Svaka osoba ima sedece property-je:
// name - string
//gender - "M" || "F"
// age - number
// familyMembers - array[]

//2. Konstruktorska funkcija treba da prima parametre name, age, gender

//3. Napisati u konstruktorskoj funciji metod koji dodaje
//drugu osobu kao clana porodice


//4. Svaka osoba treba da dobije dodatne propertije father/mother,a niz family treba dase pretvori u niz "children"

//5. Metod "dodajClanaPorodice" treba prosiriti tako
//da njegov drugi parametar govori o tome, da li je
//novododati clan dete ili roditelj



function Osoba(ime, godine, pol) { //po konvenciji pocinje velikim pocetnim slovom
    //this = {}
    this.name = ime;                    //objekat je ovde this, ovo sve ostalo su property-ji
    this.gender = godine;
    this.age = pol
    this.children = []
    this.father = null
    this.mother = null

    this.dodajClanaPorodice = function (relative, isChild) {        //dodaje clana porodice, funkcija koja treba da u osobu nad kojoj je pozovemo (pera.dodajClanaPorodice) da u njegovu listu doda novog clana
        if (isChild) {
            this.children.push(relative)
        } else {
            if (relative.gender === "M") {
                this.father = relative
            } else {
                this.mother = relative
            }
        }
    }
    //return this
}



var pera = new Osoba("Pera", 37, "M")  //poziv konstruktorske funkcije
var zika = new Osoba("Zika", 24, "M")
var milena = new Osoba("Milena", 20, "Z")
var avram = new Osoba("Avram", 12, "M")
var ipce = new Osoba("Ipce", 65, "M")
var zivadinka = new Osoba("Zivadinka", 62, "Z")
var jagodinka = new Osoba("Jagodinka", 35, "Z")
var pingpong = new Osoba("Pingpong", 9, "M")

pera.dodajClanaPorodice(pingpong, true)  //ajde pozovi ovu funkciju dodajClanaPorodice za objekat pera i prosledi ove parametre, kad se fukncija pozove pera
pera.dodajClanaPorodice(zivadinka, false)







