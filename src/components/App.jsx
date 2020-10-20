import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./ToDoItem";

function App() {
	const [items, setItems] = useState([]);

	function addItem(inputText) {
		// setItemsList(itemsList.concat(item));
		/** OR */
		setItems((prevItems) => {
		return [...prevItems, inputText];
		});
	}

	function handleClick(id) {
		setItems((previousValues) => {
			return previousValues.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div className="container">
		<div className="heading">
			<h1>To-Do List</h1>
		</div>
		<InputArea onButtonClick={addItem} />
		<div>
			<ul>
			{items.map((item, index) => (
				<TodoItem
				key={index}
				index={index}
				name={item}
				onChecked={handleClick}
				/>
			))}
			</ul>
		</div>
		</div>
	);
}

export default App;
