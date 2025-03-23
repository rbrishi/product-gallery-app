import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
