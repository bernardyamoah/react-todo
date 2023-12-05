// Import styles
import { CheckCircle } from "lucide-react";
import styles from "./TaskItem.module.css";
import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { PencilIcon } from "lucide-react";
// import Library
export const TaskItem = ({ task, deleteTask,toggleTask,enterEditMode }) => {
	const [isChecked, setIsChecked] = useState(task.checked);

	const handleCheckbox = (e) => {
		setIsChecked(!isChecked);
		toggleTask(task.id);
	};
	return (
		<>
			<li className={styles.task}>
				<div className={styles["task-group"]}>
					<input
						type="checkbox"
						name={task.name}
						className={styles.checkbox}
						checked={isChecked}
						id={task.id}
						onChange={handleCheckbox}
					/>
					<label htmlFor={task.id} className={styles.label}>
						{task.name}

						<p className={styles.checkmark}>
							<CheckCircle width={24} strokeWidth={2} height={24} />
						</p>
					</label>
				</div>
				<div className={styles["task-group"]}>
					<button
						className="btn"
						aria-label={`Update ${task.name} name`}
						onClick={()=>enterEditMode(task)}
					>
						<PencilIcon width={8} height={8} />
					</button>
					<button
						className={`btn ${styles.delete}`}
						aria-label={`Update ${task.name} name`}
						onClick={() => deleteTask(task.id)}
					>
						<TrashIcon width={8} height={8} />
					</button>
				</div>
			</li>
		</>
	);
};
