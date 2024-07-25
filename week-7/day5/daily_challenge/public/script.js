document.addEventListener('DOMContentLoaded', () => {
  const emojiDiv = document.getElementById('emoji');
  const optionsDiv = document.getElementById('options');
  const feedbackDiv = document.getElementById('feedback');
  const scoreDiv = document.getElementById('score');
  let currentEmoji = '';
  let currentScore = 0;

  const fetchEmoji = async () => {
      const response = await fetch('/emoji');
      const data = await response.json();
      currentEmoji = data.emoji;
      emojiDiv.textContent = currentEmoji;
      optionsDiv.innerHTML = '';
      data.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.type = 'button';
          button.addEventListener('click', () => submitGuess(option));
          optionsDiv.appendChild(button);
      });
  };

  const submitGuess = async (guess) => {
      const response = await fetch('/guess', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ emoji: currentEmoji, guess })
      });
      const data = await response.json();
      if (data.correct) {
          feedbackDiv.textContent = 'Correct!';
          currentScore = data.score;
      } else {
          feedbackDiv.textContent = 'Wrong!';
      }
      scoreDiv.textContent = `Score: ${currentScore}`;
      fetchEmoji();
  };

  fetchEmoji();
});