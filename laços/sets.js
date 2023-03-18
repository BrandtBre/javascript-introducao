const nomes = ['Ana', 'João', 'Maria', 'Antônio', 'Miguel', 'Ana', 'Maria'];

//const meuSet = new Set(nomes);
//const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(nomes)];

console.log(meuSet);
console.log(nomesAtualizados);