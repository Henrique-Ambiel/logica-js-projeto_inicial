//Texto exibido na página e variaveis
alert('Bem vindo ao game do número secreto');
let numeroSecreto = 23;
console.log(numeroSecreto);
let palpite = prompt('Escolha um número entre 1 e 30');

// Se o chut for = ao número secreto, a pessoa acertou o número
if(palpite == numeroSecreto ){
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}`);
} else{
    alert('Você ERRRRRRROUUUU');
}