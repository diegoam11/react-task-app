import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createNewTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: newTask.title,
        description: newTask.description,
      },
    ]);
  };

  const deleteTask = (index) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== index;
      })
    );
  };

  const values = {
    tasks,
    createNewTask,
    deleteTask,
  };

  return (
    <TaskContext.Provider value={values}>{props.children}</TaskContext.Provider>
  );
}
