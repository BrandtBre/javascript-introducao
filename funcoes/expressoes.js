// função tradicional:

minhaFuncao('teste');

function minhaFuncao(param) {
  return param;
} 


// expressão de função, anônima:

const soma = function(num1, num2) {return num1 + num2;}

minhaFuncao(2, 3);

// diferença entre as duas formas de criar uma função:
// a expressão de função é anônima, ou seja, não tem nome, e é atribuída a uma constante
// a função tradicional tem nome e pode ser chamada a qualquer momento

// HOISTING, ou içamento de variáveis e funções para o topo do código
// isso acontece com as funções tradicionais e com as variaveis var
