const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

nomes.splice(1, 0, "Breno");
// o primeiro parâmetro é o índice que será removido,
// o segundo é a quantidade de elementos que serão removidos
// e o terceiro é o elemento que será adicionado no lugar do removido

console.log(nomes);

