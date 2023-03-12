// função tradicional:
function minhaFuncao(nome) {
  return `Olá, ${nome}!`;
}

// Arrow Function:

const apresentarArrow = nome => `Olá, ${nome}!`;
const soma = (num1, num2) => num1 + num2;

// Arrow Function com mais de uma linha de código:

const soma2 = (num1, num2) => {
  const soma = num1 + num2;
  return soma;
}

// a arrow function é uma forma mais curta de escrever uma função