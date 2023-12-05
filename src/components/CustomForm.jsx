// library imports
import { useState } from "react";
import { PlusIcon } from "lucide-react";
function formatTime() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const seconds = now.getSeconds().toString().padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
}

import React from "react";
import toast from "react-hot-toast";
import { CheckIcon } from "lucide-react";

export const CustomForm = ({ addTask }) => {
	const [task, setTask] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		addTask({
			name: task,
			checked: false,
			id: formatTime(),
		});
		toast.success("Task added",{
			icon: <CheckIcon />,
		});
		setTask("");
	};

	return (
		<form className="todo" onSubmit={handleFormSubmit}>
			<div className="wrapper">
				<input
					type="text"
					id="task"
					className="input"
					value={task}
					onInput={(e) => setTask(e.target.value)}
					required
					autoFocus
					maxLength={60}
					placeholder="Enter Task"
				/>
				<label htmlFor="task" className="label">
					Enter Task
				</label>
			</div>
			<button className="btn" aria-label="Add Task" type="submit">
				<PlusIcon />
			</button>
		</form>
	);
};
