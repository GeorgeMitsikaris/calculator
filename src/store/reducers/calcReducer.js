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
};

const calculate = (state, action) => {
  const current = parseFloat(state.currentNumber);
  const previous = parseFloat(state.prevNumber);
  if (isNaN(current) || isNaN(previous)) return "";
  let value = "";
  switch (state.operation) {
    case "+":
      value = previous + current + action.payload;
      break;
    case "-":
      value = previous - current + action.payload;
      break;
    case "*":
      value = previous * current + action.payload;
      break;
    case "÷":
      value = previous / current + action.payload;
      break;
    default:
      value = "";
  }
  return value;
};
export const calcReducer = (state = initialState, action) => {  
	switch (action.type) {
		case SET_NUMBER:
			if (state.currentNumber.includes(".") && action.payload === ".")
				return state;
			if (state.currentNumber === "" && action.payload === "0") return state;
			return {
				...state,
				currentNumber: `${state.currentNumber}${action.payload}`,
			};
    case SET_OPERATION:
      // This check is for the first time we hit an operation button
			if (state.prevNumber === "") {
				return {
					...state,
					currentNumber: "",
					prevNumber: `${state.currentNumber}${action.payload}`,
					operation: action.payload,
				};
      }
      
      // This check is for the case we hit the wrong operation button and want to change the operation
      if (state.currentNumber === '') {
        return {
          ...state,
          operation: action.payload,
          prevNumber: `${parseFloat(state.prevNumber)}${action.payload}`
        }
      }

      // 
      if (state.prevNumber === "" && state.currentNumber === "") return state;
      
			return {
				...state,
				currentNumber: "",
				prevNumber: calculate(state, action),
				operation: action.payload,
			};
		case CLEAR_NUMBER:
		case DELETE_LAST_DIGIT:
		case CALCULATE:
		default:
			return state;
	}
};
