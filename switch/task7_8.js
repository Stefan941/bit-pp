//Task 7

var input = "Delhi"

switch (input) {
    case "Tokyo":
    case "Osaka":
    case "Nagoya": {
        console.log("Japan");
        break;
    }
    case "Delhi":
    case "Mumbai":
    case "Kolkata": {
        console.log("India");
        break;
    }
    case "Shanghai":
    case "Beijing":
    case "Chongqing": {
        console.log("China");
    }
    case "New York City":
    case "Los Angeles":
    case "Chicago": {
        console.log("United States");
    }
    case "London":
    case "Birmingham":
    case "Cambridge": {
        console.log("United Kingdom");
    }
    default: {
        console.log("Please choose a different city")
    }










}