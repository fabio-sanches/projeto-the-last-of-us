/*
1o passo - égar elemento html botoes
2o passo - identificar click usuário
3o passo - desmarcar botao selecionado anterior
4o passo - marcar botão clicadocom se estivesse selecionado
5o passo - esconder imagem anterior
6o passo - fazer aparecer imagem correspondente ao botão clicado
*/

// 1o passo - pegar elemento html botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');



//2o passo - identificar click usuário
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();

        selecionarBotãoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
   })

})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotãoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}