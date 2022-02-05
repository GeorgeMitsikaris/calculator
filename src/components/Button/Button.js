import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, dispatch, actionType, payload }) => {
	const clickHandler = () => {
		dispatch(actionType(payload));
	};
	return (
		<button onClick={clickHandler} className={styles.btn}>
			{children}
		</button>
	);
};

export default Button; 
