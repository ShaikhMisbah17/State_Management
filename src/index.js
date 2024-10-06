// This is the entry point for your React application that renders your App component into the DOM.

import React from "react"; // Import the React library to enable JSX syntax and utilize React features.
import ReactDOM from "react-dom"; // Import ReactDOM, which provides DOM-specific methods to interact with the DOM.
import "./index.css"; // Import the main stylesheet for global styling across the entire application.
import App from "./App"; // Import the App component, which is the root component containing all other components of the app.
import { CssBaseline } from "@mui/material"; // Import CssBaseline from Material-UI to normalize default browser styles.

ReactDOM.render(
  // Wrap the application with React.StrictMode, a tool for highlighting potential problems in an application.
  // Apply Material-UI’s CssBaseline component at the top level to ensure consistent baseline styles throughout the app.
  // Render the App component, which includes all other components of the application.
  // This command targets the 'root' DOM element to render the entire React application into.
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
