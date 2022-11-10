import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Button.module.scss";

const Button = ({ children, actionType, payload, test }) => {
	const dispatch = useDispatch();
	const clickHandler = () => {
		dispatch(actionType(payload));
	};
	return (
		<button onClick={clickHandler} className={`${styles.btn}`} data-test={test}>
			{children}
		</button>
	);
};

export default Button; 
