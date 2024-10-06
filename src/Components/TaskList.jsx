// This component displays the list of tasks.

import React, { useContext } from "react"; // Import React and the useContext hook from React library.
import { TaskContext } from "../Context/TaskContext"; // Import the TaskContext to access the tasks state managed by this context.
import Task from "../Components/Task"; // Import the Task component to render each individual task.
import { List } from "@mui/material"; // Import the List component from Material-UI for a stylized list container.

export default function TaskList() {
  // Define and export the TaskList functional component.
  const { tasks } = useContext(TaskContext); // Use useContext to access the 'tasks' array from TaskContext.

  return (
    <List style={{ maxWidth: 360, margin: "0 auto" }}>
      {" "}
      {/* List component from Material-UI styled to have a maximum width and centered automatically. */}
      {tasks.map(
        (
          task // Map over the 'tasks' array to create a list of Task components.
        ) => (
          <Task key={task.id} task={task} /> // Render the Task component for each task, passing 'task' as a prop and using 'task.id' as a key for React's list rendering optimization.
        )
      )}
    </List> // End of the List component.
  );
}
