import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, dispatch, actionType, payload, test }) => {
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
