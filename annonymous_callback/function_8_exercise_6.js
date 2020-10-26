function check(password, succesCallback, errorCallback) {
    var imaBroj = false;

    if (password.length < 6) {
        return errorCallback();
    }
    for (var i = 0; i < password.lenght; i++) {
        var broj = Number(password[i])
        if (!isNaN(broj)) {
            imaBroj = true
        }
        if (!imaBroj) {
            return errorCallback();
        }
        succesCallback();
    }
}

check("JSGuru", valid, invalid);

    // function valid() {
        // console.log("password is valid");
    // }

    // function invalid() {
    // console.log("password is not valid");
    // }



