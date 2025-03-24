// document.addEventListener('DOMContentLoaded', () => {
//   const emojiDiv = document.getElementById('emoji');
//   const optionsDiv = document.getElementById('options');
//   const feedbackDiv = document.getElementById('feedback');
//   const scoreDiv = document.getElementById('score');
//   let currentEmoji = '';
//   let currentScore = 0;

//   const fetchEmoji = async () => {
//       const response = await fetch('/emoji');
//       const data = await response.json();
//       currentEmoji = data.emoji;
//       emojiDiv.textContent = currentEmoji;
//       optionsDiv.innerHTML = '';
//       data.options.forEach(option => {
//           const button = document.createElement('button');
//           button.textContent = option;
//           button.type = 'button';
//           button.addEventListener('click', () => submitGuess(option));
//           optionsDiv.appendChild(button);
//       });
//   };

//   const submitGuess = async (guess) => {
//       const response = await fetch('/guess', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ emoji: currentEmoji, guess })
//       });
//       const data = await response.json();
//       if (data.correct) {
//           feedbackDiv.textContent = 'Correct!';
//           currentScore = data.score;
//       } else {
//           feedbackDiv.textContent = 'Wrong!';
//       }
//       scoreDiv.textContent = `Score: ${currentScore}`;
//       fetchEmoji();
//   };

//   fetchEmoji();
// });



const emojis = [
    { character: "😀", name: "Grinning Face" },
    { character: "😂", name: "Face with Tears of Joy" },
    { character: "😍", name: "Smiling Face with Heart-Eyes" },
    { character: "😎", name: "Smiling Face with Sunglasses" },
    { character: "😭", name: "Loudly Crying Face" },
    { character: "😡", name: "Pouting Face" },
    { character: "👍", name: "Thumbs Up" },
    { character: "👏", name: "Clapping Hands" },
    { character: "💡", name: "Light Bulb" },
    { character: "❤️", name: "Red Heart" },
    { character: "🎉", name: "Party Popper" },
    { character: "🔥", name: "Fire" }
];

let player = "";

let score = 0; // Keep track of score

// Generate a random emoji and options
function randomEmote() {
    const randomIndex = () => Math.floor(Math.random() * emojis.length);

    const correctIndex = randomIndex();
    const correctEmote = emojis[correctIndex];

    const distractors = new Set();
    while (distractors.size < 3) {
        const randomDistractor = emojis[randomIndex()].name;
        if (randomDistractor !== correctEmote.name) {
            distractors.add(randomDistractor);
        }
    }

    const options = [...distractors, correctEmote.name];
    options.sort(() => Math.random() - 0.5);

    return { emoji: correctEmote.character, correctAnswer: correctEmote.name, options };
}

// Display the quiz
function presentQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ""; // Clear previous content

    const quiz = randomEmote();

    const question = document.createElement("h2");
    question.textContent = `What is the name of this emoji? ${quiz.emoji}`;
    quizContainer.appendChild(question);

    const form = document.createElement("form");
    quiz.options.forEach((option) => {
        const label = document.createElement("label");
        label.style.display = "block";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "emoji";
        radio.value = option;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        form.appendChild(label);
    });

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    form.appendChild(submit);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const selected = new FormData(form).get("emoji");
        if (!selected) {
            alert("Please select an option.");
            return;
        }

        await handleGuess(selected, quiz.correctAnswer);
    });

    quizContainer.appendChild(form);
}

// Handle guess submission
async function handleGuess(selected, correctAnswer) {
    if (!player) {
        player = prompt("Enter your name:") || "Anonymous";
    }

    try {
        const response = await fetch("/api/submit-guess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ player, guess: selected, correctAnswer })
        });

        const result = await response.json();

        if (result.correct) {
            alert(`Correct! Your score: ${result.score}`);
        } else {
            alert(`Wrong! The correct answer was: ${correctAnswer}. Your score: ${result.score}`);
        }

        showLeaderboard();
        presentQuiz();
    } catch (error) {
        console.error("Error submitting guess:", error);
    }
}

// Show leaderboard
async function showLeaderboard() {
    try {
        const response = await fetch("/api/leaderboard");
        const data = await response.json();

        const leaderboardContainer = document.getElementById("leaderboard");
        leaderboardContainer.innerHTML = "<h2>Leaderboard</h2>";

        const list = document.createElement("ol");
        data.leaderboard.forEach(([name, score]) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${name}: ${score}`;
            list.appendChild(listItem);
        });

        leaderboardContainer.appendChild(list);
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
    }
}

// Initialize game
showLeaderboard();
presentQuiz();



// Implement a leaderboard to show the top scores.

// Advanced Features (Optional):

// Add a time limit for each guess.
// Implement user authentication to save and display personalized scores.
// Use emojis from a larger dataset or an external API.
// Implement difficulty levels that affect the number of options or time limit.
// Implement a “hint” feature that provides a clue about the emoji’s nam