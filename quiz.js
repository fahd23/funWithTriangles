const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#check-answer-btn");
// const questionContainer = document.querySelectorAll(".question-container")
const message = document.querySelector("#output-msg");

const correctAnswers = ["3","65°","Yes","right angled","90°","Yes","Scalene","Yes"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    message.innerText = "Your Score is " + score;
}

submitAnswerButton.addEventListener("click", calculateScore);
