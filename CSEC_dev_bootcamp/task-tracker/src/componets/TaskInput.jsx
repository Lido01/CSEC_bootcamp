import { useState } from "react";
import { useTasks } from "../store/taskContexts";

export const TaskInput = () => {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  const handleAdd = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
