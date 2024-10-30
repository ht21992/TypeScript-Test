import { createContext } from "react";
import { useEffect, useState } from "react";
import Task from "../components/Task";

export interface Task {
  status: string;
  title: string;
}

interface TaskContextType {
  tasks: Task[] | null;
  addTask: (task: Task) => void;
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskContextInitialValues = {
  tasks: null,
  addTask: () => null,
  updateTask: () => null,
  deleteTask: () => null,
};

const TaskContext = createContext<TaskContextType>(TaskContextInitialValues);

interface Props {
  childeren: React.ReactNode;
}

export const TaskProvider = (props: Props) => {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    setTasks([
      { status: "Failed", title: "Zemlak, Daniel and Leannon" },
      { status: "In Progress", title: "Carroll Group" },
      { status: "To Do", title: "Rowe-Schoen" },
      { status: "Done", title: "Wyman-Ledner" },
    ]);
  }, []);

  const addTask = (task: Task) => null;
  const updateTask = (id: string) => null;
  const deleteTask = (id: string) => null;

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {""}
      {props.childeren}
    </TaskContext.Provider>
  );
};
