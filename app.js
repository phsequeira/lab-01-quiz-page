// import functions and grab DOM elements
import { checkIfYes } from './utils.js';
    
// initialize state
const quizButton = document.getElementById('startQuiz');
let correctAnswers = 0;
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    //promt alert
    alert('Welcome to the WSL Quiz!');
    //promt confirm
    const readyForTest = confirm('Are you ready to test your knowledge?');

    if (!readyForTest) return;

    const firstName = prompt('Please enter your first name.');
    
    const lastName = prompt('Please enter your last name.');
    
    const question1 = prompt(firstName.charAt(0).toUpperCase() + ' ' + lastName.charAt(0).toUpperCase() + ', was the World Surf League founded in 1976?');
    
    if (checkIfYes(question1)) {
        console.log('nioce');
        ++correctAnswers;
        console.log(correctAnswers);
    }
    else {
        console.log('wrong');
    }

    
});