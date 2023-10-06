// Seleciona todos os botões com a classe "numero-button"
const numeroButtons = document.querySelectorAll('.numero-button');
// Seleciona o botão normal
const botaoNormal = document.getElementById('botao-normal');
// Seleciona a primeira main com a classe "content"
const contentMain = document.querySelector('.content');
// Seleciona a main com a classe "content__secundary"
const contentSecundaryMain = document.querySelector('.content__secundary');
// Seleciona o parágrafo onde você deseja exibir o resultado
const resultadoPara = document.getElementById('resultado');

let numeroSelecionado = null;

// Adiciona um ouvinte de evento a cada botão com a classe "numero-button"
numeroButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Armazena o número do botão que foi clicado
        numeroSelecionado = button.getAttribute('data-numero');
    });
});

// Adiciona um ouvinte de evento ao botão normal
botaoNormal.addEventListener('click', () => {
    // Verifica se um número foi selecionado antes de atualizar a classe e o parágrafo
    if (numeroSelecionado !== null) {
        // Remove a classe "selecionado" da primeira main
        contentMain.classList.remove('selecionado');
        // Adiciona a classe "selecionado" à segunda main
        contentSecundaryMain.classList.add('selecionado');
        // Exibe o número selecionado no parágrafo
        resultadoPara.textContent = `   ${numeroSelecionado}`;
    } else {
        // Caso nenhum número tenha sido selecionado, exibe uma mensagem de erro
        resultadoPara.textContent = 'Por favor, selecione um número antes de pressionar o botão enviar.';
    }
});

var botaoSelecionado = null; // Armazena o botão selecionado atualmente

function mudarCor(button) {
  // Verificar se o botão clicado é o mesmo que já está selecionado
  if (button === botaoSelecionado) {
    return; // Não faz nada se já estiver selecionado
  }

  // Remover a classe 'highlight' do botão anteriormente selecionado
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("highlight");
  }

  // Adicionar a classe 'highlight' apenas ao botão clicado
  button.classList.add("highlight");

  // Atualizar o botão selecionado
  botaoSelecionado = button;
}