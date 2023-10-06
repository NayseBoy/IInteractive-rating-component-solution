# Frontend Mentor - Interactive rating component solution

está é a solução de [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor e seus desafios ajudam você a melhorar suas habilidades de codificação criando projetos realistas. 

## Índice

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Os usuários devem ser capazes de:

- Veja o layout ideal do aplicativo dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Selecione e envie uma classificação numérica
- Veja o estado do cartão 'Obrigado' após enviar uma classificação

### Links

- Solution URL: [Meu site de solução]([https://your-solution-url.com](https://www.frontendmentor.io/solutions/interactive-rating-component-using-sass-flexbox-javascript-tTWA4ktnSf))
- Live Site URL: [Git-hub pages](https://nayseboy.github.io/IInteractive-rating-component-solution/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Eu aprendi um pouco mais sobre css positions e como usar com melhor eficiência o FlexBox do css, tornar meu site responsivo com o MediaQueries e por fim dar funcionalidade a ele pelo javascript

```js
let numeroSelecionado = null;

// Adiciona um ouvinte de evento a cada botão com a classe "numero-button"
numeroButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Armazena o número do botão que foi clicado
        numeroSelecionado = button.getAttribute('data-numero');
    });
});
```

### Continued development

Nos meus projetos futuros realmente quero treinar as funções javascript, css positions e mediaqueries para aperfeiçoar mais a minha tecnica.

## Author

- Website - [Kaique Silva](https://github.com/NayseBoy)
- Frontend Mentor - [@NayseBoy](https://www.frontendmentor.io/profile/NayseBoy)
