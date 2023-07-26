'use strict';

const gameQuestions = [
    "Would you rather be forced to sing along or dance to every single song you hear?",
    "Would you rather have the ability to see 10 minutes into the future or 150 years into the future?",
    "Would you rather have telekinesis (the ability to move things with your mind) or telepathy (the ability to read minds)?",
    "Would you rather team up with Wonder Woman or Captain Marvel?",
    "Would you rather find true love today or win the lottery next year?",
    "Would you rather be in jail for five years or be in a coma for a decade?",
    "Would you rather have another 10 years with your partner or a one-night stand with your celebrity crush?",
    "Would you rather be chronically under-dressed or overdressed?",
    "Would you rather labor under a hot sun or extreme cold?",
    "Would you rather buy 10 things you don't need every time you go shopping or always forget the one thing that you need when you go to the store?",
];

const questionContent = document.getElementById('question_content');
const generateButton = document.getElementById('generate_btn');
generateButton.addEventListener('click', displayRandomQuest);

function displayRandomQuest() {
    const randomIndex = Math.floor(Math.random() * gameQuestions.length);
    question_content.textContent = gameQuestions[randomIndex];
};
displayRandomQuest()