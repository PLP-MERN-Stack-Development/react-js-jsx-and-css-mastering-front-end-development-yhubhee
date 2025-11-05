import React from "react";
import Home from "./pages/home";
import { ThemeProvider } from "./context/themecontext";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
