(function () {

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


    function Product(ime, cena, rok) {
        this.name = ime
        this.price = formatPrice(cena)
        this.id = generateId()
        this.expirationDate = checkDate(rok)
        this.getInfo = function () {
            var info = ''
            var productCode = ''
            productCode += this.name[0].toUpperCase() + this.name[this.name.length - 1] + this.id
            info += productCode + ', ' + this.name + ', ' + this.price.toFixed(2)
            return info
        }
    }


    function shoppingBag() {
        this.list = []

    }



    //var nekiProizvod = new Product("Milka", 15, new Date("2020-12-14"))
    //console.log(nekiProizvod)

    var a = new Product('Milka', 15.4948  , new Date(Date.now()))
    console.log(a.getInfo())


})();