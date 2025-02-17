import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Body.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navibar from './components/Navibar';
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// Separate component to use ThemeContext
function AppContent() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
        <Navibar>
          <Button onClick={() => setDarkMode(!darkMode)} className="ms-auto">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </Navibar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
