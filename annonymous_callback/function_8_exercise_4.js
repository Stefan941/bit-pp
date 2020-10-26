function A(name, surname) {

    return function () {
        console.log(name + "." + surname + "@gmail.com")
    }
}

var vracena = A("stef", "stef");
vracena();