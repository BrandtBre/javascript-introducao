const idadeMinimima = 18;
const idadeCliente = 17;

if (idadeCliente >= idadeMinimima) {
  console.log('Pode Beber');
} else {
  console.log('Não Pode Beber')
}

// Operador Ternário

idadeCliente >= idadeMinimima ? console.log('Pode Beber') : console.log('Não Pode Beber');

// Operador Ternário com Variável

const podeBeber = idadeCliente >= idadeMinimima ? 'Pode Beber' : 'Não Pode Beber';
console.log(podeBeber);
