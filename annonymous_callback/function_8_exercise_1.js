
(function () {
    var arr = [4, 5, 11, 9];
    var niz = []
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            niz[i/*niz.length*/] = arr[arr.lenght - 1]
        }
        else if (i === arr.length - 1)
            niz[i] = arr[0]
        else {
            niz[i] = arr[i]
        }
        //console.log(niz) - gde napisati console.log???
    }
})(); 