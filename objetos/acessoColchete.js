const cliente = {
  nome: 'André',
  idade: 36,
  cpf: '12345678900',
  email: 'andre@sla.com'
};

console.log(cliente["nome"]);
console.log(cliente["cpf"]);
console.log(cliente["idade"]);
console.log(cliente["email"]);

// console.log(`Os três primeiros digitos do CPF são: ${cliente["nome"].substring(0,3)}`)

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
});