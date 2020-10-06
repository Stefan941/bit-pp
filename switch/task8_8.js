//Task 8

var a = 10
var b = 0
var operacija = "/"

switch (operacija) {
    case "+": {
        console.log(a + b);
        break;
    }
    case "-": {
        console.log(a - b);
        break;
    }
    case "*": {
        console.log(a * b);
        break;
    }
    case "/": {
        if (b === 0) {
            console.log("Zabranjeno deliti sa nulom")
        } else {
            console.log(a / b)
        }
        break;
    }
}