function LuidyMoura(cont) {
    var array = [];
    for (var i = 0; i < cont; i++) {
        if ((i + 1) % 5 == 0 && (i + 1) % 9 == 0) {
            array.push("LuidyMoura");
        } else if ((i + 1) % 5 == 0) {
            array.push("Luidy");
        } else if ((i + 1) % 9 == 0) {
            array.push("Moura");
        } else {
            array.push(i + 1);
        }
    }
    return array;
}
console.log(LuidyMoura(45));