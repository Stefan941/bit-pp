
function a(niz) {
    var result = "";
    for (var i = 0; i < niz.length; i++) {


        if (niz[i] === undefined || niz[i] === null || isNaN(niz[i]) || !isFinite(niz[i])) {
        } else {
            result += niz[i];
        }
    }
    return result;
}

console.log(a([NaN, 0, 15, false, -22, "", undefined, 47, null]))


