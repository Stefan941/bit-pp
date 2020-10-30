//Dat je string "abrakadabra"
//Zameniti slova "a" sa slovima "A"

var word = "abrakadabra";
var newWord = "";

for (i = 0; i < word.length; i++) {
    if (word[i] === "a") {
        newWord += "A";
    } else {
        newWord += word[i]
    }
}
console.log(newWord)

//forEach - moramo string da pretvorimo u arrey
//nista ne vraca samo izvrsava za svaki element u nizu
/* [
  'a', 'b', 'r', 'a',
  'k', 'a', 'd', 'a',
  'b', 'r', 'a'
]*/

var result = []

word.split("").forEach(function (el/*, i, niz*/) {
    if (el === "a") {
        //result[result.length] = "A"
        result.push("A")
    } else {
        result.push(el)
    }
})
console.log(result.join(""))


//sa predefinisanom funkcijom MAP

result = word.split("").map(function (e) {
    if (e === "a") {
        return "A"
    }
    return e
}).join("")

