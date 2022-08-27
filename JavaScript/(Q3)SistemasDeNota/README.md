# Questão 03 - Sistema de Notas

## Enunciado

Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.

## Observações

* Esse foi o mais complicado, principalmente a parte de pensar em uma lógica para descobrir o próximo número que seja múltiplo de 5. 

Inicialmente, pensei em armazenar os multiplos de 5 de 0 a 100, por ser um intervalo fechado, não seria um problema, porém não seria nada modular, ao aumentar o intervalo teria que atualizar os multiplos de 5. Então fui para solução mais óbvia: caçar uma formula matemática que fizesse isso pra mim (são numeros 🤷🏾‍♂️). Com isso, encontrei a maravilhosa `Math.ceil`, uma função que recebe um número decimal e retorna um inteiro aproximado(Ex.: 1.9 -> 2), depois disso foi só alegria. 

Queremos um número divisivel por 5, certo ? Para saber o próximo, precisamos saber em qual ponto estamos, logo, dividi a nota(que por consequência não é um número divido por 5) esperando que o mesmo me retorne um número decimal, aproximei esse número decimal para cima, utilizando o `Math.ceil`, e multipliquei por 5 de novo para encontrar nosso famigerado número. Isso é uma solução sem todas as condições, mas o resto é detalhe.

* Fiz o input pelo console mesmo, usei o pacote `readline-sync`. Instalei o mesmo usando o npm com o seguinte comando:

    npm install readline-sync    
    
