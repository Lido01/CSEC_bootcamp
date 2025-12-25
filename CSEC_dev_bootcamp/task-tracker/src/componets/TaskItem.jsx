import { useTasks } from "../store/taskContexts";

export  const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li className={task.completed ? "completed" : ""}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
