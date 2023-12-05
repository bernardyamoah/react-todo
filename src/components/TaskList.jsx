
import styles from "./TaskList.module.css";
import { TaskItem } from "./TaskItem";
export const TaskList = ({ tasks, deleteTask, enterEditMode ,toggleTask}) => {
	return (
		<ul className={styles.tasks}>
			{tasks
				.sort((a, b) => b.id - a.id)
				.map((task) => (
					<TaskItem key={task.id} task={task} deleteTask={deleteTask}
						toggleTask={toggleTask}
						enterEditMode={enterEditMode}
					/>
				))}
		</ul>
	);
};
