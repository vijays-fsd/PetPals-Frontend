import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext"; // No need to wrap App with Router here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <App />
  
  </StrictMode>
);
