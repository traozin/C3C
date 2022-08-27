function validaTriangulo(A, B, C) {
    return A < (B + C) && B < (A + C) && C < (A + B);
}

function classificaTriangulo(A, B, C) {
    if (validaTriangulo(A, B, C)) {
        if (A == B && B == C) {
            return 'Triângulo equilátero';
        }
        else if (A == B || A == C || C == B) {
            return 'Triângulo isóceles';
        }
        else {
            return 'Triângulo escaleno';
        }
    }
    else {
        return 'Triângulo inválido!';
    }
}

var readlineSync = require('readline-sync');

console.log('Indique os lados do triângulo a ser validado/classificado!');
var A = Number(readlineSync.question('A: '));
var B = Number(readlineSync.question('B: '));
var C = Number(readlineSync.question('C: '));

console.log(classificaTriangulo(A, B, C));