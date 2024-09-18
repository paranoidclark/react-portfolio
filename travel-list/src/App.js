import {useState} from "react";

const initialItems = [
	{id: 1, description: "Passports", quantity: 2, packed: false},
	{id: 2, description: "Socks", quantity: 12, packed: true},
	{id: 2, description: "Charge", quantity: 1, packed: false},
];

export default function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🌏 Far Away 🎒</h1>;
}

function Form() {
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = {description, amount, packed: false, id: Date.now()};
		console.log(newItem);

		setDescription("");
		setAmount(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select value={amount} onChange={(e) => setAmount(e.target.value)}>
				{Array.from({length: 20}, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList() {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item itemObj={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

function Item({itemObj}) {
	return (
		<li>
			<span style={itemObj.packed ? {textDecoration: "line-through"} : {}}>
				{itemObj.quantity} {itemObj.description}
			</span>
			<button>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className="stats">
			<em>You have X items on your list, and you already packed X </em>
		</footer>
	);
}
