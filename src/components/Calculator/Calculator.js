import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import styles from "./Calculator.module.scss";
import {
	setNumber,
	setOperation,
	calculate,
	clearNumber,
	deleteLastDigit,
} from "../../store/actions/actionCreators";

const Calculator = () => {
	const currentNumber = useSelector((state) => state.calc.currentNumber);
	const prevNumber = useSelector((state) => state.calc.prevNumber);
	const dispatch = useDispatch();
	return (
		<div className={styles.container} data-test="calculator-component">
			<h1 className={styles.header} data-test="header">
				Calculator
			</h1>
			<div className={styles.enteredText} data-test="prev-value">
				{prevNumber}
			</div>
			<div className={`${styles.enteredText} ${styles.current}`} data-test="current-value">
				{currentNumber || 0}
			</div>
			<div className={styles.buttonContainer}>
				<Button
					dispatch={dispatch}
					payload={"r"}
					actionType={setOperation}
					test="value-r"
				>
					&radic;<span className={styles.overline}>x</span>
				</Button>
				<Button
					payload={"e"}
					actionType={setOperation}
					test="value-e"
				>
					x<sup>2</sup>
				</Button>
				<Button actionType={clearNumber} test="value-clear">
					CE
				</Button>
				<Button
					actionType={deleteLastDigit}
					test="value-del"
				>
					DEL
				</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					payload={"1"}
					actionType={setNumber}
					test="value-1"
				>
					1
				</Button>
				<Button
					payload={"2"}
					actionType={setNumber}
					test="value-2"
				>
					2
				</Button>
				<Button payload={"3"} actionType={setNumber}>
					3
				</Button>
				<Button
					payload={"÷"}
					actionType={setOperation}
					test="value-/"
				>
					÷
				</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					payload={"4"}
					actionType={setNumber}
					test="value-4"
				>
					4
				</Button>
				<Button payload={"5"} actionType={setNumber}>
					5
				</Button>
				<Button payload={"6"} actionType={setNumber}>
					6
				</Button>
				<Button
					payload={"*"}
					actionType={setOperation}
					test="value-*"
				>
					*
				</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button payload={"7"} actionType={setNumber}>
					7
				</Button>
				<Button
					dispatch={dispatch}
					payload={"8"}
					actionType={setNumber}
					test="value-8"
				>
					8
				</Button>
				<Button payload={"9"} actionType={setNumber}>
					9
				</Button>
				<Button
					dispatch={dispatch}
					payload={"+"}
					actionType={setOperation}
					test="value-+"
				>
					+
				</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button
					dispatch={dispatch}
					payload={"0"}
					actionType={setNumber}
					test="value-0"
				>
					0
				</Button>
				<Button
					dispatch={dispatch}
					payload={"."}
					actionType={setNumber}
					test="value-."
				>
					.
				</Button>
				<Button actionType={calculate} test="value-=">
					=
				</Button>
				<Button
					dispatch={dispatch}
					payload={"-"}
					actionType={setOperation}
					test="value--"
				>
					-
				</Button>
			</div>
		</div>
	);
};

export default Calculator;
