// library imports
import { useState } from "react";

import React from "react";
import toast from "react-hot-toast";
import { CheckCheckIcon } from "lucide-react";
import { useEffect } from "react";

export const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
	const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

	useEffect(() => {
		const closeMoodalifEscaped = (e) => {
			e.key === "Escape" && closeEditMode();
		};
		window.addEventListener("keydown", closeMoodalifEscaped);
		return () => {
			window.removeEventListener("keydown", closeMoodalifEscaped);
		};
	}, [closeEditMode]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		updateTask({ ...editedTask, name: updatedTaskName });
		toast.success("Task updated successfully");
		setUpdatedTaskName("");
	};

	return (
		<div
			role="dialog"
			aria-labelledby="editedTask"
			onClick={(e) => {
				e.target === e.currentTarget && closeEditMode();
			}}
		>
			<form className="todo" onSubmit={handleFormSubmit}>
				<div className="wrapper">
					<input
						type="text"
						id="editedTask"
						className="input"
						value={updatedTaskName}
						onInput={(e) => setUpdatedTaskName(e.target.value)}
						required
						autoFocus
						maxLength={60}
						placeholder="Enter Task"
					/>
					<label htmlFor="editedTask" className="label">
						Update Task
					</label>
				</div>
				<button className="btn" aria-label="Update Task" type="submit">
					<CheckCheckIcon strokeWidth={2} height={24} width={24} />
				</button>
			</form>
		</div>
	);
};
