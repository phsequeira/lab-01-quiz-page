// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('to check if the first char of checkIfYes is a Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkIfYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('to check if the first char of checkIfYes is a not a Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkIfYes('no');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});