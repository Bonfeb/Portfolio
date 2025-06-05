import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/Body.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navibar from "./components/Navibar";
import Projects from "./pages/Projects";
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const muiTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f5f5f5",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
    },
  });

  return (
    <MUIThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
          <Navibar />

          {/* Toggle button on top right */}
          <div className="text-end p-2 pe-4">
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </MUIThemeProvider>
  );
}

export default App;
