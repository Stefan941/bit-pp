(function () {
    var word = "programMming"
    var ispis = ""
    var brojac = 0

    for (i = 0; i < word.length; i++) {
        if (word[i] === "m" || word[i] === "M") {
            ispis += "*"
            brojac++;
        } else {
            ispis += word[i]
        }
    }
    console.log(ispis, brojac)
})();