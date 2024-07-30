const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/quiz', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.redirect('/quiz/score');
  }
});

router.post('/quiz', (req, res) => {
  const userAnswer = req.body.answer;
  if (triviaQuestions[currentQuestionIndex].answer.toLowerCase() === userAnswer.toLowerCase()) {
    score++;
    res.json({ message: 'Correct!', score: score });
  } else {
    res.json({ message: 'Incorrect!', score: score });
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < triviaQuestions.length) {
    res.redirect('/quiz');
  } else {
    res.redirect('/quiz/score');
  }
});

router.get('/quiz/score', (req, res) => {
  res.json({ finalScore: score });
  currentQuestionIndex = 0;
  score = 0;
});

module.exports = router;