/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'selecione um número entre 1 e 10';
jeito correto porem o jeito abaixo simplifica nossa linguagem*/
// função trexo de codigo que executa ou faz alguma funcionalidade faz uma ação apenas uma função

let listaNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeoAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2} );
}
function exibirMensagemInicial(){
   exibirTextoNaTela('h1','Jogo do numero secreto');
   exibirTextoNaTela('p','selecione um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;

   if(chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Parabens,acertou!');
      let palavraTentativas=tentativas> 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
         if(chute > numeroSecreto){
       exibirTextoNaTela('p', 'o numero secreto é menor');
   } else {
      exibirTextoNaTela('p', 'o numero é maior');
         }
      tentativas ++
      limparCampo(); 
   }
}
function gerarNumeoAleatorio() { 
   let numeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
   let quantideNumerosLista = listaNumerosSorteados.length;
   if(quantideNumerosLista == numeroLimite){
      listaNumerosSorteados = [];
   }

   if(listaNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeoAleatorio();
   }else{
      listaNumerosSorteados.push(numeroEscolhido);
      console.log(listaNumerosSorteados);
      return numeroEscolhido;
   }
}
function limparCampo(){
   chute= document.querySelector('input');
   chute.value=''; 
}
function reiniciarGame(){
   numeroSecreto=gerarNumeoAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true)
}