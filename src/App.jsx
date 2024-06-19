import { useState, useEffect } from "react";
import "./App.css";
import useStore from "./store/store";
const CounterApp = () => {
	const [counter, setCounter] = useState(0);
	const [running, setRunning] = useState(false);
	const { name, setName } = useStore();
	const toggleCounter = () => {
		if (!running) {
			setName("");
			setCounter(0);
			setRunning(true);
		} else {
			setCounter(0);
			setRunning(false);
			setName("Aquib");
		}
	};

	useEffect(() => {
		let intervalId;

		if (running) {
			intervalId = setInterval(() => {
				setCounter((prevCounter) => prevCounter + 1);
			}, 1000);
		} else {
			clearInterval(intervalId);
		}

		return () => clearInterval(intervalId);
	}, [running]);

	return (
		<div className="container">
			<div className="headling">{name ? "Hi " + name : counter}</div>
			<div>
				<button onClick={toggleCounter}>{running ? "stop" : "Start"}</button>
			</div>
		</div>
	);
};

export default CounterApp;
