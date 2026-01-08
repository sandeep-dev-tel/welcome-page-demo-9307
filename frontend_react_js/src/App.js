import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import NextPage from "./pages/NextPage";
import "./App.css";

/**
 * Root application component.
 * Provides the top-level routes for the app.
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/next" element={<NextPage />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
