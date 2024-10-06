// This file will define your context and provide functions to manipulate the tasks state.

import React, { createContext, useState } from "react"; // Import React, createContext for creating a new context, and useState for managing state within this context.

export const TaskContext = createContext(); // Create and export a new context object, which can be used by other components to access the tasks state and actions.

export function TaskProvider({ children }) {
  // Define and export the TaskProvider component, which includes a 'children' prop. This component will wrap parts of the app needing access to the context.
  const [tasks, setTasks] = useState([]); // Initialize the tasks state as an empty array and setTasks as the function to update this state.

  const addTask = (task) => {
    // Define the addTask function, which takes a task object as an argument.
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now() }]); // Update the tasks state by adding a new task with a unique ID using Date.now().
  };

  const deleteTask = (taskId) => {
    // Define the deleteTask function, which takes a task ID as an argument.
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Update the tasks state by filtering out the task with the given ID.
  };

  return (
    // Render the TaskContext.Provider component, passing the tasks state and the task-manipulating functions as a value.
    // This allows all child components within this provider to access the tasks state and functions.
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
