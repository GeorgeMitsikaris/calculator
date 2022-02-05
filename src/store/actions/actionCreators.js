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

export const clearNumber = (payload) => {
	return {
			type: CLEAR_NUMBER,
			payload,
		};
};

export const deleteLastDigit = (payload) => {
	return {
			type: DELETE_LAST_DIGIT,
			payload,
		};
};

export const setOperation = (payload) => {
	return {
			type: SET_OPERATION,
			payload,
		};
};

export const calculate = (payload) => {
	return {
			type: CALCULATE,
			payload,
		};
};
