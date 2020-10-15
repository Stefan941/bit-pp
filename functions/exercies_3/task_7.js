function(num) {
    var sum = 0;
    var delioci = [];
    for (i = 1; i < num; i++) {
        if (num % i === 0) {
            delioci[delioci.length] = i;
        }
    }
    for (var i = 0; i < delioci.length, i++) {
        sum += delioci[i];
    }
    return num === sum
}