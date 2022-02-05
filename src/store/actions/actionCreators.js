import {
	SET_NUMBER,
	CLEAR_NUMBER,
	DELETE_LAST_DIGIT,
	SET_OPERATION,
	CALCULATE,
} from "./actionTypes";

export const setNumber = (payload) => {
	return {
			type: SET_NUMBER,
			payload,
		};
};

export const clearNumber = () => {
	return {
			type: CLEAR_NUMBER,
		};
};

export const deleteLastDigit = () => {
	return {
			type: DELETE_LAST_DIGIT,
		};
};

export const setOperation = (payload) => {
	return {
			type: SET_OPERATION,
			payload,
		};
};

export const calculate = () => {
	return {
			type: CALCULATE
		};
};
