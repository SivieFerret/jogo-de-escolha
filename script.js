const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const storyImage = document.getElementById('story-image');

function chooseOption(choice) {
  if (choice === 'aceitar-conversa') {
    updateStory(
      'Clara senta-se à mesa e vocês começam a conversar. Ela pergunta sobre seus hobbies. O que você responde?',
      'images/cafeteira.jpg',
      [
        { text: 'Falar sobre leitura', action: 'falar-leitura' },
        { text: 'Falar sobre esportes', action: 'falar-esportes' }
      ]
    );
  } else if (choice === 'recusar-conversa') {
    updateStory(
      'Você recusa educadamente. Clara sorri e vai embora. Você sente que perdeu uma oportunidade. Fim do jogo.',
      'images/fim.jpg',
      []
    );
  } else if (choice === 'falar-leitura') {
    updateStory(
      'Clara se anima ao ouvir sobre seus livros favoritos. Ela menciona que ama romances e sugere uma livraria próxima. Você aceita o convite?',
      'images/cafeteira.jpg',
      [
        { text: 'Aceitar o convite', action: 'ir-livraria' },
        { text: 'Recusar educadamente', action: 'recusar-livraria' }
      ]
    );
  } else if (choice === 'falar-esportes') {
    updateStory(
      'Clara sorri, mas parece não se interessar muito por esportes. A conversa esfria e vocês se despedem. Fim do jogo.',
      'images/fim.jpg',
      []
    );
  } else if (choice === 'ir-livraria') {
    updateStory(
      'Vocês visitam a livraria e passam horas escolhendo livros juntos. Clara menciona um encontro no parque no próximo fim de semana. Você aceita?',
      'images/livraria.jpg',
      [
        { text: 'Aceitar o encontro', action: 'aceitar-encontro' },
        { text: 'Recusar gentilmente', action: 'recusar-encontro' }
      ]
    );
  } else if (choice === 'recusar-livraria') {
    updateStory(
      'Você recusa o convite educadamente. Clara entende, mas a conversa termina ali. Fim do jogo.',
      'images/fim.jpg',
      []
    );
  } else if (choice === 'aceitar-encontro') {
    updateStory(
      'Vocês se encontram no parque, e o dia é maravilhoso. Parece ser o começo de uma bela história de amor. Fim do jogo!',
      'images/amor.jpg',
      []
    );
  } else if (choice === 'recusar-encontro') {
    updateStory(
      'Você decide não ir ao encontro, mas se lembra com carinho do dia que conheceu Clara. Fim do jogo.',
      'images/fim.jpg',
      []
    );
  }
}

function updateStory(newStory, imagePath, choices) {
  storyElement.textContent = newStory;
  storyImage.src = imagePath;
  choicesElement.innerHTML = '';

  if (choices.length > 0) {
    choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.className = 'choice-btn';
      button.onclick = () => chooseOption(choice.action);
      choicesElement.appendChild(button);
    });
  }
}
