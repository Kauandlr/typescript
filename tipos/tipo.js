"use strict";
// string
let nome = 'Kauan';
console.log(nome);
// numbers
let idade = 27;
// idade = 'ana'
// idade = 27.5
console.log(idade);
// boolean
let possuiHobbies = true;
// possuiHobbies = 1
if (possuiHobbies) {
    console.log('Ele possui hobbies');
}
else {
    console.log('Ele não possui hobbies');
}
// tipos explicitos
let minhaIdade; // any Isso demonstra que a variável pode receber, Número, Letras, Objetos
minhaIdade = 27;
console.log(typeof minhaIdade); // Typeoff ele demonstra o valor da variável, neste caso number
// minhaIdade = '27'
// array
let hobbies = ["Cozinhar", "Praticar Esportes"]; // Uma array recebe N valores, alí com o N eu declarei que é any pra receber diferentes objetos
console.log(hobbies[0]);
console.log(typeof hobbies); // Neste caso o typeof é um object
hobbies = [100, 200, 300, 'olá', 100];
console.log(hobbies[3]); // Este 3, significa o que vou chamar dentro da array, 0 começa o primeiro, então neste caso vou chamar o olá
// tupla
let endereco = ['Chapecó SC', 99]; // Aqui eu declarei que quero somente receber String e Number na sequência citada
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 100] = "verde";
    Cor[Cor["azul"] = 101] = "azul";
    Cor[Cor["laranja"] = 102] = "laranja";
    Cor[Cor["ciano"] = 103] = "ciano";
})(Cor || (Cor = {}));
let minhaCor = Cor.ciano;
console.log(minhaCor);
console.log(Cor.verde, Cor.ciano);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
