# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Analysis
This project is about a calculator that the user can use in order to make all the basic arithmetic operations plus squared root of x and x squared.
It consists of a header displaying 'Calculator' two divs and twenty buttons. The bottom div displays the number the user is typing and in the top one the number entered (if it's the first number) or the result of the operation (if it's not), plus the sign for the operation that is about to execute.
There are ten buttons for the ten numbers, one for the period of the decimals, one for the equals operation, four for the basic operations, on for the squared root
of x, one for the x squared, one for clearing the values and one for deleting the last digit. 
The user can change the operation that has been choosed and also can see the the temporary result. By hitting equals the top value is cleared and in the bottom is displayed the final result.
The user neither can enter multiple periods nor zeros in front of the number and also cannot divide by zero.
The operation for the squared root of x and the x squared applied to the entered number not to the result. If the entered number is zero then nothing happens.

## Tasks
1. Find how many components is needed and create them.
2. Create layout, apply styles and make sure it's responsive.
3. Implement Redux setup and create action creators.
4. Implement the business logic in reducer
5. Create tests
6. Final CSS changes and qa

## Documentation
# CSS
This project uses css modules with scss. There is a Styles folder which currently has two files for variables and for typography.
The connection with scss files of the components is made using @use since the @import is deprecated.
The app is responsive until 240px. The rem unit is set up to be 10px == 1rem.
# Components
Beside the App component the app is using two more components. The first is the Calculator and the second which is child to Calculator is the Button.
1. Button
It receives as props the following:
1. {children} for the button text
2. {dispatch} which is defined using the useDispatch hook in the parent component
3. {actionType} because there are five different actions
4. {payload} the data (if needed) that uses the reducer
2. Calculator
The elements for the Calculator is described in Project Analysis. The bottom div receives its value from the redux state value currentNumber. 
The top div receives its value from the redux state value prevNumber.
# Redux
1. State:
The state has five values prevNumber, currentNumber, operation and isFinal. The first three is self explanatory. The isFinal is flag to indicate that the calculation of the value is coming from the equals button and not from the operations buttons and is the final calculation
2. Action creators:
1. setNumber which takes as an argument the payload which represents the text of the number and period buttons
2. setOperation which takes as an argument the payload which represents the text of the operation buttons
3. calculate which takes no arguments and calculates the result of the operation based on the values currentNumber, prevNumber and operation of the state
4. clearNumber which takes no arguments and clears the divs text
5. deleteLastDigit which takes no arguments and delete the last digit of the entered number
3. Reducer:
There is a calculate function that takes as argument the state object and calculates the result of the respective operation. First we parseFloat the currentNumber and prevNumber. If it's not a number any of these values we return empty string. In any other case we take the operation from the state and apply it to the previous and current numbers and return the value. 
1. case setNumber: Sets the currentNumber only. If isFinal is true sets the entered value and clears the rest of the state. No multiple periods or zeros in front of the number is allowed.
2. case setOperation: If isFinal is true does nothing. If square root or squared is pressed, sets the currentNumber to the respective math operation. If prevNumber and currentNumber is empty returns the current state (does nothing). The first time we hit an operation button and we have already hit a number we set the currentNumber to empty string, we take the currentNumber and set it to prevNumber and append the sympol of the equation. If the user wants to change the operation that has been selected we set the state operation to the new value and we parseFloat the prevNumber to remove the old operation symbol and append the new one. In any other case we set the currentNumber to empty string set the new operation value and execute the calculate function.
3. case calculate: If any of the currentNumber, prevNumber or operation is empty string we do nothing (return state). In any other case we set the currentNumber to the result of the calculate function and default the rest values of the state.
4. case clearNumber: We default the state.
5. case deleteLastDigit: If isFinal is true we do nothing (return state). In any other case we delete the last digit with the slice method.

