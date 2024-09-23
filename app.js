//Texto exibido na página
alert('Bem vindo ao game do número secreto');

//Variáveis
let numeroSecreto = 23;
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

//Enquanto palpite não for igual ao número secreto, o site continuará perguntando qual número é
while(palpite != numeroSecreto){
    palpite = prompt('Escolha um número entre 1 e 30');
    // Se o chute for = ao número secreto, a pessoa acertou o número, se não, será exibido o quão próximo está o número
    if(palpite == numeroSecreto ){
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    }   else{
        if(numeroSecreto > palpite){
        alert(`O número secreto é maior do que o ${palpite}`);
        } else {
        alert(`O número secreto é menor do que o ${palpite}`);
        }
        //Adiciona o número de tentativas a cada erro
        tentativas++;
    }
}