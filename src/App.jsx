import { useState } from "react";

// import Custom Hooks
import useLocalStorage from "./hooks/useLocalStorage";
// Custom Components
import { CustomForm } from "./components/CustomForm";
import { Toaster } from "react-hot-toast";
import { TaskList } from "./components/TaskList";
import { EditForm } from "./components/EditForm";
import toast from "react-hot-toast";
import { Trash2Icon } from "lucide-react";
function App() {
	const [tasks, setTasks] = useLocalStorage("react-todo.taskList", []);
	const [previousFocusEl, setPreviousFocusEl] = useState(null);
	const [editedTask, setEditedTask] = useState(null);
	const [isEditing, setIsEditing] = useState(false);

	const addTask = (task) => {
		setTasks((prevState) => [...prevState, task]);
	};

	const deleteTask = (id) => {
		setTasks((prevState) => prevState.filter((t) => t.id !== id));
		toast.success("Task deleted successfully", {
			icon: <Trash2Icon/>,
		});
	};

	const toggleTask = (id) => {
		setTasks((prevState) =>
			prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
		);
		
	};
	const closeEditMode = () => {
		setIsEditing(!isEditing);
		previousFocusEl.focus();
	};

	const updateTask = (task) => {
		setTasks((prevState) =>
			prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
		);
		closeEditMode();
	};

	const enterEditMode = (task) => {
		setEditedTask(task);
		setIsEditing(!isEditing);
		setPreviousFocusEl(document.activeElement);
	};
	return (
		<>
			<div className="container">
				<header>
					<h1>My Task List</h1>
				</header>
				{isEditing && (
					<EditForm
						editedTask={editedTask}
						updateTask={updateTask}
						closeEditMode={closeEditMode}
					/>
				)}

				<CustomForm addTask={addTask} />
				{tasks && (
					<TaskList
						tasks={tasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
						enterEditMode={enterEditMode}
					/>
				)}
			</div>
			<Toaster />
		</>
	);
}

export default App;
