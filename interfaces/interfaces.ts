interface Humano {
    nome: string
}

function saudarcomOla(pessoa: Humano){ // Aqui estou definindo para que Nome tenha String e Idade tenha Number
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa = { // Aqui estou declarando o nome para chamar no console.log
    nome: 'Kauan',
    idade: 19
}



saudarcomOla(pessoa)
mudarNome(pessoa)
saudarcomOla(pessoa)