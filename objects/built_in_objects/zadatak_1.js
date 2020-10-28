(function () {

    var input = [22, 4, 7, 11, -2, 1]
    var result = []
    /*for (var i = 0; i < input.length; i++){*/ //(for petlja koja gura u result.lenght)
    input.forEach(function (element) {

        /*result[result.length] = input[i]*/ //prvo ovo
        /*result.push(input[i])*/ //pa onda ovo

        result.push(element)
        result.push(element)
    })

    console.log(result)
})();