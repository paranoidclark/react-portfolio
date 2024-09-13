import {useState} from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
	return (
		<div>
			{/* <Steps /> */}
			<Counter />
		</div>
	);
}

function Counter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	function addStep() {
		setStep((step) => step + 1);
	}
	function minusStep() {
		if (step > 1) setStep((step) => step - 1);
	}

	function addCounter() {
		setCount((count) => (count = count + step));
	}

	function minusCounter() {
		if (count > 1) setCount((count) => (count = count - step));
	}

	return (
		<div className="counter-container">
			<div className="step">
				<button onClick={minusStep}>-</button>
				<h2>Step: {step}</h2>
				<button onClick={addStep}>+</button>
			</div>
			<div className="counter">
				<button onClick={minusCounter}>-</button>
				<h2>Counter: {count}</h2>
				<button onClick={addCounter}>+</button>
			</div>
		</div>
	);
}

function Steps() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step > 1) setStep((step) => step - 1);
	}

	function handleNext() {
		if (step < 3) setStep((step) => step + 1);
	}

	function closeSteps() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<button className="close" onClick={closeSteps}>
				&times;
			</button>

			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>

					<p className="message">
						Step {step}: {messages[step - 1]}
					</p>

					<div className="buttons">
						<button
							style={{backgroundColor: "#7950f2", color: "#fff"}}
							onClick={handlePrevious}
						>
							Previous
						</button>
						<button
							style={{backgroundColor: "#7950f2", color: "#fff"}}
							onClick={handleNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}
