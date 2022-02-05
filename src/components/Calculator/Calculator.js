import React from "react";
import Button from "../Button/Button";
import styles from "./Calculator.module.scss";

const Calculator = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Calculator</h1>
			<div className={styles.enteredText}></div>
			<div className={styles.enteredText}></div>
			<div className={styles.buttonContainer}>
				<Button>1</Button>
				<Button>2</Button>
				<Button>3</Button>
				<Button>÷</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button>4</Button>
				<Button>5</Button>
				<Button>6</Button>
				<Button>*</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button>7</Button>
				<Button>8</Button>
				<Button>9</Button>
				<Button>+</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button>0</Button>
				<Button>.</Button>
				<Button>=</Button>
				<Button>-</Button>
			</div>
		</div>
	);
};

export default Calculator;
