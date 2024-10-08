//Texto exibido na página
alert('Bem vindo ao game do número secreto');

//Variáveis
let numeroMaximo = 300;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //Gera um número secreto aleatório e inteiro
console.log(numeroSecreto);
let palpite;
let tentativas = 1;

//Enquanto palpite não for igual ao número secreto, o site continuará perguntando qual número é
while(palpite != numeroSecreto){
    palpite = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for = ao número secreto, a pessoa acertou o número, se não, será exibido o quão próximo está o número
    if(palpite == numeroSecreto ){
        break; //Se a condição for verdadeira, o looping é interrompido na hora
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

//Operador ternário verifica se a quantidade de tentativas é maior que 1 para realizar a concordância do texto
let quantasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${quantasTentativas}`);