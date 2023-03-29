const cliente = {
  nome: 'André',
  idade: 36,
  cpf: '12345678900',
  email: 'andre@sla.com'
};

console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.cpf);
console.log(cliente.email);

console.log(`Os três primeiros digitos do CPF são: ${cliente.cpf.substring(0,3)}`)