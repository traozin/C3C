function bhaskara(a, b, c) {
    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "Delta é negativo";
    } else {
        return [(-b + Math.sqrt(delta)) / (2 * a),     //X1
                (-b - Math.sqrt(delta)) / (2 * a)]     //X2
    }
}

console.log(bhaskara(1, -2, 1));