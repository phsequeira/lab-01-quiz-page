// import functions and grab DOM elements
import { checkIfYes } from './utils.js';
    
// initialize state
const quizButton = document.getElementById('startQuiz');
const results = document.getElementById('secretDiv');
let correctAnswers = 0;
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    
    alert('Welcome to the WSL Quiz!');
    
    const readyForTest = confirm('Are you ready to test your knowledge?');

    if (!readyForTest) return;

    const firstName = prompt('Please enter your first name.');
    
    const lastName = prompt('Please enter your last name.');
    
    const question1 = prompt(firstName + ' ' + lastName + ', was the World Surf League founded in 1976?');
    
    if (checkIfYes(question1)) {
        ++correctAnswers;
    }
    
    const question2 = prompt(firstName + ', is $100,000 is the amount of money the event winners win');

    if (checkIfYes(question2)) {
        ++correctAnswers;
    }

    const question3 = prompt('Was Caroline Marks the top womans surfer in 2019?');

    if (!checkIfYes(question3)) {
        ++correctAnswers;
    }

    results.textContent = firstName.toUpperCase(0) + ' ' + lastName.toUpperCase(0) + '! you got ' + correctAnswers + ' right!';
});
