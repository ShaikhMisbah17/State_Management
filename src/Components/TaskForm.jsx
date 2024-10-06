// This component provides a form to add new tasks.

import React, { useContext, useState } from "react"; // Import React, useContext for accessing context, and useState for managing state.
import { TaskContext } from "../Context/TaskContext"; // Import the TaskContext to use the context that manages tasks.
import { Button, TextField } from "@mui/material"; // Import Button and TextField components from Material-UI for UI elements.

export default function TaskForm() {
  const [title, setTitle] = useState(""); // Use useState to create 'title' state for storing the input from the user.
  const { addTask } = useContext(TaskContext); // Use useContext to access the 'addTask' function from TaskContext.

  const handleSubmit = (e) => {
    // Define handleSubmit function that will be called on form submission.
    e.preventDefault(); // Prevent the default form submission behavior, which typically refreshes the page.
    if (title.trim()) {
      // Check if the title is not just whitespace.
      addTask({ title }); // Call the addTask function from context to add a new task with the current title.
      setTitle(""); // Reset the title to empty, clearing the form input after submission.
    }
  };

  return (
    // Render a form with a submit event handler.
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "center", padding: 20 }}
    >
      <TextField
        label="New Task" // Label for the TextField, visible above the input box.
        variant="outlined" // The TextField has an outlined style.
        value={title} // Bind the value of TextField to the 'title' state.
        onChange={(e) => setTitle(e.target.value)} // Update 'title' state on every keystroke in the TextField.
        fullWidth // TextField should occupy the full width of its container.
        style={{ marginRight: 10 }} // Add right margin to the TextField.
      />
      <Button type="submit" color="primary" variant="contained">
        Add Task
      </Button>
    </form>
  );
}
