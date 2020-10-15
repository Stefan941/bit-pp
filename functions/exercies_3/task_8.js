function a(rec, text) {
    var brojac = 0;
    var rec2 = "";

    for (var i = 0; i < text.length; i++) {
        if (text[i] != " ") {
            rec2 = rec2 + text[i];
        } if (rec === rec2) {
            brojac++;
            rec2 = ""
        }
        if (text[i] === " ") {
            rec2 = ""
        }
    }
    return brojac
}

console.log(a("fox", "The quick brown fox fox fox"))