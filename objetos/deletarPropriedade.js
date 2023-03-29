const objPersonagem = {
  nome: "Gandalf",
  classe: "Mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "Mago"
  },
  status: "desaparecido"
}

delete objPersonagem.aliado;

console.log(objPersonagem) // Retorna um valor undefined

// O operador 'delete' sempre vai retornar um booleano,
// No entanto, quando vc tenta deletar algo que n existe ele retorna 'true'