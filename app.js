/*let titulo = document.querySelector('h1'); // querySelector seleciona o elemento a ser alterado, podendo passar IDs ou classes para alterar algum especifico
titulo.innerHTML = 'Jogo do número SECRETO';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10' //innerHTML manipula textos e até mesmo tags dentro do elemento*/
let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let NumeroAleatorio = geraNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female')
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número SECRETO');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

chute = document.querySelector('input');
chute.addEventListener('input', verificaSeTemNumero);

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == NumeroAleatorio){
        exibirTextoNaTela('h1', 'ACERTOU!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('P', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} :)`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', 'true');
        document.querySelector('input').setAttribute('disabled', 'true');
    }else{
        chute > NumeroAleatorio ? exibirTextoNaTela('P', 'O número secreto é menor!') : exibirTextoNaTela('p', 'O número secreto é maior!')
    }
    tentativas++;
    limparCampo();

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    NumeroAleatorio = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.querySelector('input').removeAttribute('disabled');
}

function verificaSeTemNumero(){
    let chute = document.querySelector('input').value;

    if(chute != ''){
        document.getElementById('chute').removeAttribute('disabled');
    }else{
        document.getElementById('chute').setAttribute('disabled', 'true');
    }
}

function geraNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroGerado)){
        return geraNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroGerado);
        return numeroGerado;
    }
}
exibirMensagemInicial();






/*Desafio 02*/ 
function dobroDoNumero(){
    numeroRecebido = parseInt(prompt('Informe um numero para dobrar'));
    return numeroRecebido = 'O dobro é: ' + numeroRecebido * 2;
}

function dobroDoNumero(){
    numeroRecebido = parseInt(prompt('Informe um numero para dobrar'));
    return numeroRecebido = 'O dobro é: ' + numeroRecebido * 2;
}

function qualEhMaior(numero1, numero2){
    return numero1 > numero2 ? `o numero ${numero1} é maior` : (numero1 < numero2 ? `o numero ${numero2} é maior` : 'os numeros são iguais');
}

function testarFuncoes(){
    resultado = dobroDoNumero();
    alert(resultado);

    resultado2 = qualEhMaior(num1 = parseInt(prompt('Informe um numero')), num2 = parseInt(prompt('Informe outro numero')));
    alert(resultado2);
}

