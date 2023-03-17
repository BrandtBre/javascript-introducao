const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 7.5, 9, 6];

const alunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (alunosEMedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado! \n`);
    
    const [alunos, medias] = alunosEMedias;
    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    // let indice = alunosEMedias[0].indexOf(aluno);
    // let mediaDoAluno = alunosEMedias[1][indice];

    console.log(`A média do aluno ${aluno} é ${mediaDoAluno}.`)
  } else {
    console.log(`Aluno não encontrado`);
  }
}

exibeNomeENota('João');
