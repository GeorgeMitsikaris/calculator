import {
	SET_NUMBER,
	CLEAR_NUMBER,
	DELETE_LAST_DIGIT,
	SET_OPERATION,
	CALCULATE,
} from "../actions/actionTypes";

const initialState = {
	prevNumber: "",
	currentNumber: "",
	operation: "",
	isFinal: false,
	isSquare: false,
};

const calculate = (state) => {
  const current = parseFloat(state.currentNumber);
  const previous = parseFloat(state.prevNumber);
  if (isNaN(current) || isNaN(previous)) return "";
  let value = "";
  switch (state.operation) {
    case "+":
      value = previous + current ;
      break;
    case "-":
      value = previous - current;
      break;
    case "*":
      value = previous * current;
      break;
    case "÷":
      value = previous / current;
      break;
    default:
      value = "";
  }
  return value.toString();
};
export const calcReducer = (state = initialState, action) => {  
	switch (action.type) {
		case SET_NUMBER:
			// If the user press a number after has used square root or squared replaces the number with the new one just like windows calculator
			if (state.isSquare) {
				return {
					...state,
					currentNumber: action.payload,
					isSquare: false
				}
			}
			// isFinal flag is set to true only when the user hits the equal button and we make sure that we override the result from the previous calculation
			if (state.isFinal) {
				return {
					...state,
					currentNumber: action.payload,
					prevNumber: "",
					operation: "",
					isFinal: false,
				};
			}
			// We want only one period in the number
			if (state.currentNumber.includes(".") && action.payload === ".")
				return state;
			// We don't want to add zeros in front of the number
			if (state.currentNumber === "" && action.payload === "0") return state;
			return {
				...state,
				currentNumber: `${state.currentNumber}${action.payload}`,
			};
		case SET_OPERATION:
			// We don't do anything if the user try to select an operation before select a number
			if (state.isFinal) return state;
			// Handles square root operation
			if (action.payload === "r") {
				if (state.currentNumber === '') return state;
				return {
					...state,
					currentNumber: Math.sqrt(state.currentNumber).toString(),
					isSquare: true
				};
      }
      
			// Handles x squared operation
			if (action.payload === "e") {
				if (state.currentNumber === "") return state;
				return {
					...state,
					currentNumber: (state.currentNumber * state.currentNumber).toString(),
					isSquare: true
				};
			}

			// This check is for the first time we hit an operation button without hitting a number first
			if (state.prevNumber === "" && state.currentNumber === "") return state;

			// This check is for the first time we hit an operation button and we have hit a number
			if (state.prevNumber === "") {
				return {
					...state,
					currentNumber: "",
					prevNumber: `${state.currentNumber}${action.payload}`,
					operation: action.payload,
				};
			}

			// This check is for the case we hit the wrong operation button and want to change the operation
			if (state.currentNumber === "") {
				return {
					...state,
					operation: action.payload,
					prevNumber: `${parseFloat(state.prevNumber)}${action.payload}`,
				};
			}

			return {
				...state,
				currentNumber: "",
				prevNumber: `${calculate(state)}${action.payload}`,
				operation: action.payload,
			};
		case CALCULATE:
			if (
				state.currentNumber === "" ||
				state.prevNumber === "" ||
				state.operation === ""
			)
				return state;
			return {
				...state,
				currentNumber: calculate(state),
				prevNumber: "",
				operation: "",
				isFinal: true,
			};
		case CLEAR_NUMBER:
      return {
				prevNumber: "",
				currentNumber: "",
				operation: "",
				isFinal: false,
			};
    case DELETE_LAST_DIGIT:
      if (state.isFinal) {
        return {
          ...state
        }
      }
      return {
        ...state,
        currentNumber: state.currentNumber.slice(0, -1)
      }
		default:
			return state;
	}
};
