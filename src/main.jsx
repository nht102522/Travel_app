import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index_copy.css";
import "./App.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
