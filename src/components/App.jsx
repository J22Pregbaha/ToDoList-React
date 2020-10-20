import React, { useState } from "react";

function App() {
	const [item, setItem] = useState("");
	const [itemsList, setItemsList] = useState([]);

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input
					type="text"
					onChange={(event) => setItem(event.target.value)}
					value={item}
				/>
				<button
					onClick={() => {
						// setItemsList(itemsList.concat(item));
						/** OR */
						setItemsList((previousValue) => {
							return [...previousValue, item];
						});
						setItem("");
					}}
				>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					<li>An Item </li>
					{itemsList.map((item) => (
						<li>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
