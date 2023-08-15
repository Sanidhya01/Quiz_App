const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const options = document.getElementsByClassName("option");

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    // Add more questions here
];

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < options.length; i++) {
        options[i].textContent = currentQuestion.options[i];
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is: " + currentQuestion.options[currentQuestion.answer]);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
    }
}

showQuestion();
