// Let

let forma = 'retângulo';
let altura = 5;
let comprimento = 7;


if (forma === 'retângulo') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area); // 35

// let não pode ser redeclarada
// let altura = 10;
// console.log(altura); // SyntaxError: Identifier 'altura' has already been declared
