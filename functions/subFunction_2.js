//Task 1
// input: nesto
// outpput: true / false

function isString(nesto) {
    var b;

    if (typeof nesto === "string") {
        b = true;
    } else {
        b = false
    }
    return b;
}
console.log(isString("ja jesam string"));
console.log(isString(123));


//Task 2
// input: nesto
// output: true / false
// proveravamo da li je prazan string


function isEmptyString(a) {
    if (typeof a === "string" && a === "") {
        return true
    }
    return false
}

console.log(isEmptyString("ja jesam string"));
console.log(isEmptyString(123));
console.log(isEmptyString(""));


//Task 3
// input: neki string i neki broj
// output: vraca string n puta

function nify(text, n) {
    var result = "";
    n = n || 1 //trik da mu damo vrednost kada nema vrednost
    for (i = 0; i < n; i++) {
        result += text;
    }

    return result;
}
console.log(nify("abc"))
console.log(nify("abc", 3))


//Task 4
//radili slican

//Task5
//pronalazimo PRVU




