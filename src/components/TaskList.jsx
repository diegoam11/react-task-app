import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const {tasks, deleteTask} = useContext(TaskContext);
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
          ></TaskCard>
        );
      })}
    </div>
  );
}
