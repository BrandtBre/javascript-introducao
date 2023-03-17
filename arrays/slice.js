//Method: slice

const alunos = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinicius',
  'Renan',
  'Renata',
  'Cairo',
  'Joana',
];

const salaUm = alunos.slice(0, 10); // alunos.slice(0, alunos.lenght / 2); Funciona também
const salaDois = alunos.slice(10); // alunos.slice(alunos.lenght / 2); Funciona também

console.log(alunos);
console.log(salaUm);
console.log(salaDois);