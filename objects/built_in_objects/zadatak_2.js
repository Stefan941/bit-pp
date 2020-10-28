(function () {

    var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
    var result = []

    for (var i = 0; i < input.length; i++) { //prolazimo kroz sve elemente prvog niza i da kopiramo one koje ne postoje u drugom 
        var alredyAdded = false
        for (var j = 0; j < result.length; j++) { //da li u nizu result ima neki kao u input nizu i reci ce vec je dodat ako ima neki
            if (result[j] === input[i]) {
                alredyAdded = true
                break;
            }
        }
        if (!alredyAdded) {
            result[result.length] = input[i]
        }
    }
    console.log(result)

})();


