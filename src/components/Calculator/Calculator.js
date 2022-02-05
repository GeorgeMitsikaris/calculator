import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import styles from "./Calculator.module.scss";
import { setNumber, setOperation } from "../../store/actions/actionCreators";

const Calculator = () => {
  const currentNumber = useSelector(state => state.calc.currentNumber);
  const prevNumber = useSelector((state) => state.calc.prevNumber);
  const dispatch = useDispatch();
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Calculator</h1>
			<div className={styles.enteredText}>{prevNumber}</div>
			<div className={styles.enteredText}>{currentNumber || 0}</div>
			<div className={styles.buttonContainer}>
				<Button dispatch={dispatch} payload={"1"} actionType={setNumber}>
					1
				</Button>
				<Button dispatch={dispatch} payload={"2"} actionType={setNumber}>
					2
				</Button>
				<Button dispatch={dispatch} payload={"3"} actionType={setNumber}>
					3
				</Button>
				<Button dispatch={dispatch} payload={"÷"} actionType={setOperation}>
					÷
				</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button dispatch={dispatch} payload={"4"} actionType={setNumber}>
					4
				</Button>
				<Button dispatch={dispatch} payload={"5"} actionType={setNumber}>
					5
				</Button>
				<Button dispatch={dispatch} payload={"6"} actionType={setNumber}>
					6
				</Button>
				<Button dispatch={dispatch} payload={"*"} actionType={setOperation}>
					*
				</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button dispatch={dispatch} payload={"7"} actionType={setNumber}>
					7
				</Button>
				<Button dispatch={dispatch} payload={"8"} actionType={setNumber}>
					8
				</Button>
				<Button dispatch={dispatch} payload={"9"} actionType={setNumber}>
					9
				</Button>
				<Button dispatch={dispatch} payload={"+"} actionType={setOperation}>
					+
				</Button>
			</div>
			<div className={styles.buttonContainer}>
				<Button dispatch={dispatch} payload={"0"} actionType={setNumber}>
					0
				</Button>
				<Button dispatch={dispatch} payload={"."} actionType={setNumber}>
					.
				</Button>
				<Button>=</Button>
				<Button dispatch={dispatch} payload={"-"} actionType={setOperation}>
					-
				</Button>
			</div>
		</div>
	);
};

export default Calculator;
