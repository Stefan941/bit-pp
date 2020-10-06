//Task 3

var input = 2

switch (input) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: {
        console.log("Weekday");
        break;
    }
    case 6:
    case 7: {
        console.log("Weekend");
        break;
    }
    default: {
        console.log("Input must be a number between 1 and 7");
    }
}