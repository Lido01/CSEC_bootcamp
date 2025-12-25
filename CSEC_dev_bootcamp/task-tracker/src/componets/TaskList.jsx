import { useTasks } from "../store/taskContexts";
import TaskItem from "./TaskItem";

export const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
