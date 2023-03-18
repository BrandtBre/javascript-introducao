const nomes = ['Ana', 'João', 'Maria', 'Antônio', 'Miguel'];

nomes.forEach(function(nome) {
  console.log(nome);
});

nomes.forEach((nome) => {
  console.log(nome);
});

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);