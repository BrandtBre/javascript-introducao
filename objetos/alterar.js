const pessoa = {
  nome: "Breno",
  profissao: "Programador",
}

console.log(`Nome antes de ser alterado: ${pessoa.nome}`);
console.log(`Telefone da pessoa antes de ser alterado: ${pessoa.telefone} \n`);

pessoa.telefone = "11 98853-9888";
pessoa.nome = "Breno Brandt";

console.log(`Telefone da pessoa depois de ser alterado: ${pessoa.telefone}`);
console.log(`Nome da pessoa depois de ser alterado: ${pessoa.nome} \n`);

console.log(pessoa)
