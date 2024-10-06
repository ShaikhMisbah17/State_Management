// This is your main application component that sets up the context provider and includes other components.

import React from "react"; // Import React to use JSX and React features throughout this component.
import { TaskProvider } from "./Context/TaskContext.jsx"; // Import TaskProvider from the context file to wrap and provide context to the components.
import TaskForm from "./Components/TaskForm"; // Import TaskForm component which is used for adding new tasks.
import TaskList from "./Components/TaskList.jsx"; // Import TaskList component which displays the list of tasks.
import { CssBaseline, Container, Typography } from "@mui/material"; // Import CSSBaseline, Container, and Typography from Material-UI for consistent styling and layout.

function App() {
  // Define the App component.
  return (
    // Wrap the entire application with TaskProvider to provide task context to all child components.
    // CssBaseline component from Material-UI to normalize default browser styles for a consistent look across browsers.
    // Container component to center the content and limit its width to 'sm' (small).
    // Typography component for styling text as a heading 2.
    // The title of the application displayed at the top center of the page.
    // Include the TaskForm component that allows users to input and submit new tasks.
    // Include the TaskList component that displays the list of tasks.
    // End of TaskProvider, ensuring all components inside can access the task context.
    <TaskProvider>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom>
          Task Manager
        </Typography>
        <TaskForm /> {/* <TaskForm></TaskFrom> */}
        <TaskList />
      </Container>
    </TaskProvider>
  );
}

export default App; // Export the App component as the default export of this module.
