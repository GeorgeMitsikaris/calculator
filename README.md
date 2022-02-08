# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Analysis
This project is about a calculator that the user can use in order to make all the basic arithmetic operations plus squared root of x and x squared.
It consists of a header displaying 'Calculator' two divs and twenty buttons. The bottom div displays the number the user is typing and in the top one the number entered (if it's the first number) or the result of the operation (if it's not), plus the sign for the operation that is about to execute.
There are ten buttons for the ten numbers, one for the period of the decimals, one for the equals operation, four for the basic operations, one for the squared root
of x, one for the x squared, one for clearing the values and one for deleting the last digit. 
The user can change the operation that has been choosed and also can see the temporary result. By hitting equals the top value is cleared and in the bottom is displayed the final result. In the division, if the entered number is zero then nothing happens.
The user neither can enter multiple periods nor zeros in front of the number.
The operation for the squared root of x and the x squared is applied to the entered number, not to the result. After that if the user doesn't apply an operation but a number the previous result is overwritten by the new number. 

# Tasks
1. Find how many components is needed and create them.
2. Create layout, apply basic styles and make sure it's responsive.
3. Implement Redux setup and create action creators.
4. Implement the business logic in reducer
5. Create tests
6. Final CSS changes and qa

# Documentation
### CSS
This project uses css modules with scss. There is a Styles folder which currently has two files for variables and for typography.
The connection with scss files of the components is made using @use since the @import is deprecated.
The app is responsive until 240px. The rem unit is set up to be 10px == 1rem.
### Components
Beside the App component we use two more components. The first is the Calculator and the second is the Button which is been rendered as a child.
#### Button
  It receives as props the following:
  1. {children} for the button text
  2. {dispatch} which is defined using the useDispatch hook in the parent component
  3. {actionType} fot the five different actions
  4. {payload} the data (if needed) that uses the reducer
  4. {test} for targeting buttons in the tests
#### Calculator
  The elements for the Calculator is described in Project Analysis. The bottom div receives its value from the redux state value currentNumber. 
  The top div receives its value from the redux state value prevNumber.
### Redux
#### State:
  The state has five properties prevNumber, currentNumber, operation, isFinal and isSquare. The first three is self explanatory. The isFinal flag indicates that the calculation of the value is coming from the equals button and not from one pt the operation buttons and is the final calculation. The isSquare indicates that the x square root or x squared have been hit, so if the user types a number (but not an operation) the new number overwrites the previous value.
#### Action creators:
  1. setNumber which takes as an argument the payload which represents the text of the number or the period button
  2. setOperation which takes as an argument the payload which represents the text of the operation buttons
  3. calculate which takes no payload and calculates the result of the operation based on the values of currentNumber, prevNumber and operation of the state
  4. clearNumber which takes no payload and clears the two divs text
  5. deleteLastDigit which takes no payload and delete the last digit of the entered number
#### Reducer:
  There is a calculate function that takes as argument the state object and calculates the result of the respective operation. First we parseFloat the currentNumber and prevNumber. If it's not a number any of these values we return empty string. In any other case we take the operation from the state and apply it to the previous and current numbers and return the value. 
  1. case setNumber: Sets the currentNumber only. If isFinal is true sets the entered value and clears the rest of the state. No multiple periods or zeros in front of the number is allowed.
  2. case setOperation: If isFinal is true does nothing. If square root or squared is pressed, sets the currentNumber to the respective math operation. If prevNumber and currentNumber is empty returns the current state (does nothing). The first time we hit an operation button and we have already hit a number we set the currentNumber to empty string, we take the currentNumber and set it to prevNumber and append the symbol of the selected operation. If the user wants to change the operation that has been selected we set the operation in the state to the new value and we parseFloat the prevNumber to remove the old operation symbol and append the new one. In any other case we set the currentNumber to empty string set the new operation value and execute the calculate function.
  3. case calculate: If any of the currentNumber, prevNumber or operation is empty string we do nothing (return state). In any other case we set the currentNumber to the result of the calculate function and default the rest values of the state.
  4. case clearNumber: We default the state.
  5. case deleteLastDigit: If isFinal is true we do nothing (return state). In any other case we delete the last digit with the slice method.

