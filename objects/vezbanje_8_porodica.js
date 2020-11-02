//Napisati KONSTRUKTORSKU FUNKCIJU koja kreira objekat tipa Osoba
//Svaka osoba ima: Ime, Godine, Listu dece, Oca, Majku
//Dodati METODE: addChild, addParent
//Napraviti OBJEKTE: Peru, Maju, Dragutina, Branku, Sonju

//Dragurin i Branka su roditelji od Pere; Maja je Periono dete; Sonja je Majina majka

//Uciniti da se dete ne moze doadati vise od jednom

//Promeniti addChild metodu: Prilikom dodavanja deteta da se detetu doda Parent, automatski

//Promeniti addParent metodu: Prilikom dodavanja roditelja da se roditelju doda Child, automatski


function Osoba(ime, godine, pol) {
    /*this = {}*/
    this.name = ime;
    this.age = godine;
    this.gender = pol;
    this.children = [];
    this.father = null;
    this.mother = null;

    this.addChild = function (dete) { //1. metoda
        var dodaj = true;
        this.children.forEach(function (e) {
            if (e === dete) {
                dodaj = false;
            }
            if (dodaj === true) {
                this.children.push(dete)
                dete.addParent(this)
            }
        })
    }

    this.addParent = function (roditelj) { //2. metoda
        if (roditelj.gender === "M") { //gender jer je property objekta
            this.father = roditelj
        } else {
            this.mother = roditelj;
        }
        roditelj.addChild(this);
    }
    /*return this*/
}

var pera = new Osoba("Pera", 35, "M"); //ovo su sve razliciti objekti
var maja = new Osoba("Maja", 12, "Z");
var dragutin = new Osoba("Dragutin", 60, "M");
var branka = new Osoba("Branka", 56, "Z");
var sonja = new Osoba("Sonja", 32, "Z");


pera.addChild(maja) //da bismo rekli da je Pera Majino dete, Maja postaje deo NIZ-a dece Pere
pera.addParent(dragutin)
pera.addParent(branka)

sonja.addChild(maja)

maja.addParent(sonja)
maja.addParent(pera)

dragutin.addChild(pera)
branka.addChild(pera)
