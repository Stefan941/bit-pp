(function () {

    // POMOCNE FUNKCIJE
    // ================  
    function formatPrice(price) {
        var formatted;
        var converted = Number(price) //ova linija je rekla bice broj!
        if (/*typeof price === 'number' &&*/ !isNaN(converted) && isFinite(converted)) {
            formatted = Number(converted.toFixed(2))
        } else {
            console.log("The given price is not valid")
        }
        return formatted;
    }

    function generateId() {
        return Math.floor(Math.random() * 90000 + 10000)
        /*var id = '';
        for (var i = 0; i < 5; i++) {
            id += Math.floor(Math.random() * 10)*/
    }


    function checkDate(datum) {
        if (datum instanceof Date) {
            return datum
        } else {
            console.log("Invalid date given to constructor.")
        }
    }

    // KONSTRUKTORSKE FUNKCIJE
    // =======================  
    function Product(ime, cena, rok) {
        this.name = ime
        this.price = formatPrice(cena)
        this.id = generateId()
        this.expirationDate = checkDate(rok)


        this.getInfo = function () { //funkcija koja vraca neki unique id, producteCode
            var info = ''
            var productCode = ''
            productCode += this.name[0].toUpperCase() + this.name[this.name.length - 1] + this.id
            info += productCode + ', ' + this.name + ', ' + this.price.toFixed(2)
            return info
        }
    }


    function shoppingBag() {
        this.list = []

        this.addProduct = function (proizvod) {
            if (proizvod.expirationDate > new Date()) {
                this.list.push(proizvod)
            }
        }
        this.averagePrice = function () {
            // var sum = 0;
            // this.list.forEach(function (el){
            //     if (el.price) {
            //         sum += el.price
            //     }
            // })

            /*var sum = this.list.reduce(function (acc, el) {
                return acc + el.price
            }, 0)*/

            var sum = this.caculateTotalPrice() //pozvao ovu funkciju, ovo iznad nije potrebno

            return (sum / this.list.length).toFixed(3)
        }

        this.getMostExpensive = function () {
            return this.list.map(function (el) {
                return el.price
            }).reduce(function (dosadashnjiMax, el) {
                return Math.max(dosadashnjiMax, el)
            })
        }
        this.caculateTotalPrice = function () {
            return this.list.reduce(function (sum, el) {
                return sum + el.price
            }, 0)
        }
    }


    function PaymentCard(novac, aktivna, expDate) {
        this.accountBalance = formatPrice(novac)
        this.isActive = aktivna
        this.validUntil = checkDate(expDate)
    }

    // NORMALNE FUNKCIJE
    // =================
    function checkoutAndBuy(korpa, kartica) {
        var novcaNaKartici = kartica.accountBalance //property
        var ukupnaCena = korpa.caculateTotalPrice() //funkcija tj. metoda zato je zovemo koja vraca ukupnu cenu
        if (novcaNaKartici > ukupnaCena) {
            console.log("Purchase successful!")
        } else {
            console.log("Purchase unsuccessful, lacking balance!", novcaNaKartici - ukupnaCena)
        }
    }


    var chocolate = new Product("Milka", 150.859, new Date("2020-08-26"))
    var milk = new Product("Mleko", 88.85, new Date("2020-11-15"))
    var bread = new Product("Hleb", 50.15, new Date("2020-11-12"))

    var kartica = new PaymentCard(300, true, new Date("2020-11-18"))
    var cart = new shoppingBag()
    cart.addProduct(chocolate)
    cart.addProduct(bread)
    // console.log(cart)            //sve ovo ovde zakomentarisano Mitar je obrisao
    // console.log(chocolate)
    // console.log(cart.caculateTotalPrice())
    // console.log(cart.averagePrice())
    // console.log(cart.getMostExpensive())
    checkoutAndBuy(cart, kartica)  //proverava da li ima dovoljno novca na kartici Uspesno kupnjeno/Nije uspesno kupljeno




    // var nekiProizvod = new Product("Milka", 15, new Date("2020-12-14")) //ovo radili u petak 30.10.
    // console.log(nekiProizvod)                                           //ovo radili u petak 30.10.

    var a = new Product('Milka', 15.4948, new Date(Date.now()))
    console.log(a.getInfo())

})();