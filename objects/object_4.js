// Task 4
function getRecipe() {
    var obj = {
        name: "Chicken Cordon Bleu",
        typeOfCuisine: "French Cuisine",
        complexity: 2,
        ingredients: ["Chicken breasts, ham slices, cheese, white pepper, breadcrumbs"],
        preparingTime: 35,
        preparingInstruction: "Preheat oven to 350°F",

        getIngredients: function () {
            console.log(obj.ingredients)
        },
        canMakeIn: function () {
            return 15 > obj.preparingTime
        },
        setCuisine: function (newCuisine) {
            obj.typeOfCuisine = newCuisine
        },
        removeIngredient: function (sastojak) {
            var noviSastojci = []
            for (var i = 0; i < obj.ingredients.length; i++) {
                if (obj.ingredients[i] !== sastojak) { // kopiraj sve elemente koji nisu kao ovaj element sastojak
                    noviSastojci[noviSastojci.length] = obj.ingredients
                }
            }
            obj.ingredients = noviSastojci
        }
    }
    return obj
}

//console.log(getRecipe().name)

//console.log(getRecipe().ingredients) // nema potrebe logovati, samo pozvati funkciju

//getRecipe().getIngredients() //pozvana funkcija

/*======================================================================================*/

var mojObjekat = getRecipe()
/*getRecipe()*/ mojObjekat.setCuisine("Serbian Cuisine") //setovano, prvi objekat postavi cuisine da bude srpski
console.log(/*getRecipe()*/mojObjekat.typeOfCuisine) 