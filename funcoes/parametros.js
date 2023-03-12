// parâmetros são variáveis que podem ser passadas para uma função

function soma(a, b) {
  return a + b;
}

console.log(soma(2, 2));

// parâmetros x argumentos
// na pratica se referem aos mesmos valores, mas para fins de semântica, parâmetros são os valores
// que a função espera receber e argumentos são os valores que são passados para a função

function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e tenho ${idade} anos.`;
}

console.log(nomeIdade('Luiz', 25));

function multiplica(a, b) {
  return a * b;
}

console.log(multiplica(soma(2, 3), soma(2, 3)));

// com o objetivo de evitar erros, é possível definir valores padrão para os parâmetros
// na função abaixo, caso não seja passado nenhum valor para a ou b, o valor 0 será atribuído
// evitando o erro de 'NaN'

function soma2(a = 0, b = 0) {
  return a + b;
}