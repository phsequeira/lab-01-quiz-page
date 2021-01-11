// import functions and grab DOM elements

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
    console.log(firstName);

   
  
});

