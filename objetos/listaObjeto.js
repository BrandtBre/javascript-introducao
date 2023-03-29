const cliente = {
  nome: "Breno", 
  idade: 24,
  email: "brandtbrenou@email.com",
  telefone: ["1234234324324", "324324324376"]
}

cliente.enderecos = [ {
    rua: "Rua Não Sei o Que",
    numero: 2344, 
    apartamento: true,
    complemento: "Ap 789"
  },
];

cliente.enderecos.push({
  rua: "Rua Sei o QUe la",
  numero: 324,
  apartamento: true
})

const listApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
)

console.log(listApenasApartamentos)