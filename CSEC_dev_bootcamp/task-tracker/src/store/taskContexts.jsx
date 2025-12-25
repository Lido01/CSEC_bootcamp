
import { createContext, useContext } from "react";
export const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);