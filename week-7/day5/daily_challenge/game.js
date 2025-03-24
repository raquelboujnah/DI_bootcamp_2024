const emojis = [
    { id: 1,pic: "😀", name: "Grinning Face" },
    { id: 2,pic: "😂", name: "Face with Tears of Joy" },
    { id: 3,pic: "😍", name: "Smiling Face with Heart-Eyes" },
    { id: 4,pic: "😎", name: "Smiling Face with Sunglasses" },
    { id: 5,pic: "😢", name: "Crying Face" },
    { id: 6,pic: "😡", name: "Angry Face" },
    { id: 7,pic: "🥳", name: "Partying Face" },
    { id: 8,pic: "😱", name: "Face Screaming in Fear" },
    { id: 9,pic: "🤔", name: "Thinking Face" },
    { id: 10,pic: "🙃", name: "Upside-Down Face" },
    { id: 11,pic: "🤩", name: "Star-Struck" },
    { id: 12,pic: "😴", name: "Sleeping Face" },
    { id: 13,pic: "😬", name: "Grimacing Face" },
    { id: 14,pic: "🤗", name: "Hugging Face" },
    { id: 15,pic: "😇", name: "Smiling Face with Halo" },
    { id: 16,pic: "🤑", name: "Money-Mouth Face" },
    { id: 17,pic: "😈", name: "Smiling Face with Horns" },
    { id: 18,pic: "💀", name: "Skull" },
    { id: 19,pic: "👻", name: "Ghost" },
    { id: 20,pic: "🎃", name: "Jack-O-Lantern" },
    { id: 21,pic: "🎉", name: "Party Popper" },
    { id: 22,pic: "🔥", name: "Fire" },
    { id: 23,pic: "🌈", name: "Rainbow" },
    { id: 24,pic: "⭐", name: "Star" },
    { id: 25,pic: "💖", name: "Sparkling Heart" },
    { id: 26,pic: "🍕", name: "Pizza" },
    { id: 27,pic: "🎈", name: "Balloon" },
    { id: 28,pic: "🐶", name: "Dog Face" },
    { id: 29,pic: "🐱", name: "Cat Face" },
    { id: 30,pic: "🦄", name: "Unicorn Face" }
];

// let score = 0; // Player's total score
// let leaderboard = []; // Leaderboard array to store top scores
let isGameRunning = true;

const correctRandomEmoji = ()=>{
const number = Math.floor(Math.random() * emojis.length) + 1;
return (emojis[number])
 }   

const getFourOtherNames = () => {
    const remainingEmojis = emojis.filter((emoji) => emoji.id !== correctRandomEmoji.id); // Exclude the correct emoji
    const shuffled = remainingEmojis.sort(() => 0.5 - Math.random()); // Shuffle the remaining emojis
    const otherNames = shuffled.slice(0, 4).map((emoji) => emoji.name);
    return otherNames;
};


const generateQuiz = () => {
    const correctEmoji = correctRandomEmoji(); // Get the correct random emoji
    const otherNames = getFourOtherNames(correctEmoji); // Get four other random names

    // Combine correct answer with other options and shuffle
    const options = [...otherNames, correctEmoji.name].sort(() => 0.5 - Math.random());

    // Display the emoji
    const emojiDisplay = document.getElementById('emoji-display');
    emojiDisplay.textContent = correctEmoji.pic;

    // Display the options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = options
        .map(
            (option) =>
                `<label>
                    <input type="radio" name="emoji-option" value="${option}" required>
                    ${option}
                </label><br>`
        )
        .join('');

    // Handle form submission
    const form = document.getElementById('quiz-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const selectedOption = document.querySelector('input[name="emoji-option"]:checked').value;
        const result = document.getElementById('result');

        if (selectedOption === correctEmoji.name) {
            score += 10; // Increment score by 10 for a correct answer
            result.textContent = `Correct! 🎉 Your score: ${score}`;
        } else {
            result.textContent = `Wrong! The correct answer was ${correctEmoji.name}. Your score: ${score}`;
        }

        setTimeout(() => {
            // After 2 seconds, present the next emoji
            result.textContent = '';
            generateQuiz();
        }, 2000);
    };
};

generateQuiz();

const updateLeaderboard = () => {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard
        .sort((a, b) => b - a) // Sort scores in descending order
        // .slice(0, 5) // Show top 5 scores
        .forEach((score, index) => {
            leaderboard.innerHTML += `<p>${index + 1}. ${score} points</p>`;
            leaderboard.push(score); // Save the score to the leaderboard
        });
};
updateLeaderboard();
    // Add a button to end the game and save the score
    const endGameButton = document.getElementById('endGame');
    endGameButton.onclick = () => {
        isGameRunning = false; // Stop the game
        const result = document.getElementById('result');
        result.textContent = 'Game Over. Click "Refresh" to play again.';
    };

    document.body.appendChild(endGameButton);