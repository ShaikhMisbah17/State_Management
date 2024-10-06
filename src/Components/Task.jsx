// This component represents a single task item.

import React, { useContext } from "react"; // Import React and the useContext hook for accessing React Context.
import { TaskContext } from "../Context/TaskContext"; // Import the TaskContext to access its provided values.
import { ListItem, ListItemText, IconButton } from "@mui/material"; // Import Material-UI components for UI rendering.
import DeleteIcon from "@mui/icons-material/Delete"; // Import the DeleteIcon from Material-UI icons for the delete button.

export default function Task({ task }) {
  // Define and export the Task component which receives a task object as a prop.
  const { deleteTask } = useContext(TaskContext); // Use the useContext hook to access the deleteTask function from TaskContext.

  return (
    <ListItem>
      {" "}
      {/* Use the ListItem component from Material-UI to represent each task as a list item. */}
      <ListItemText primary={task.title} />{" "}
      {/* ListItemText component displays the title of the task. */}
      <IconButton
        onClick={() => deleteTask(task.id)} // IconButton that calls the deleteTask function when clicked, passing the task's id.
        edge="end" // Aligns the button to the end of the list item for layout consistency.
        aria-label="delete" // Accessibility label for the button, important for screen readers.
      >
        <DeleteIcon />{" "}
        {/* The DeleteIcon inside the IconButton visually represents the delete functionality. */}
      </IconButton>
    </ListItem>
  );
}
