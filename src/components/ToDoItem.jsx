import React from "react";

function ToDoItem(props) {
	return (
		<li
		onClick={() => {
			props.onChecked(props.index);
		}}
		>
		{props.name}
		</li>
	);
}

export default ToDoItem;
