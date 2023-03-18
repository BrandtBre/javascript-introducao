const alunos = ['João', 'Maria', 'Pedro', 'Ana', 'José', 'Maria'];
const notas = [10, 8, 9, 7, 6, 5];

const reprovados = alunos.filter((aluno, indice) => {
  return notas[indice] < 7;
});

console.log(reprovados);

// a função filter deve retornar um booleano!