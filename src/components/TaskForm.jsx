import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createNewTask } = useContext(TaskContext);

  const validateInputs = (title, description) => {
    if (title == "") {
      return false;
    } else if (title == "" && description == "") {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs(title, description)) {
      createNewTask({
        title: title,
        description: description,
      });
      setTitle("");
      setDescription("");
    } else {
      return alert("Please, complete all inputs");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="new task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      ></input>
      <input
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></input>
      <button>Create new task</button>
    </form>
  );
}
