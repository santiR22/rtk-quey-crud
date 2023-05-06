import React from "react";
import { useCreateTaskMutation } from "../api/apiSlice";

export const TaskForm = () => {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;

    createTask({
      name,
      description,
      completed,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="" />
      <input type="checkbox" name="completed" id="" />
      <button>Add task</button>
    </form>
  );
};
