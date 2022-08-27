function arredonda(nota) {
    if (nota < 38) {
        return nota;
    } else {
        return Math.ceil(nota / 5) * 5;
    }
}

function classificaAluno(nota) {
    const notaArredondada = arredonda(nota);
    if (notaArredondada < 40) {
        return "Reprovado com nota: " + notaArredondada;
    } else {
        return "Aprovado com nota " + ((notaArredondada - nota) < 3 ? notaArredondada : nota);
    }
}


var readlineSync = require('readline-sync');
console.log('Informe a nota do estudante!');

console.log(classificaAluno(Number(readlineSync.question('Nota: '))));