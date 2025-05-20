import React, { useState, useContext, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import logoBg from "../assets/images/logoBg.jpg";

function Navibar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { darkMode } = useContext(ThemeContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Track scrolling for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-close mobile menu on route change
  useEffect(() => {
    handleClose();
  }, [location]);

  // Navigation links data for DRY code
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/skills", text: "Skills" },
    { to: "/resume", text: "Resume" },
    { to: "/contact", text: "Contact" }
  ];

  // Navbar animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        transition={{ duration: 0.5 }}
      >
        <Navbar 
          expand="lg" 
          fixed="top" 
          variant={darkMode ? "dark" : "light"}
          className="p-0"
          style={{
            background: scrolled
              ? darkMode 
                ? "rgba(25, 52, 32, 0.95)"
                : "rgba(255, 255, 255, 0.95)"
              : darkMode
                ? "linear-gradient(180deg, rgb(63, 77, 60), rgb(25, 52, 32))"
                : "linear-gradient(180deg, rgb(255, 255, 255), rgb(240, 240, 240))",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.3s ease-in-out",
            height: "56px" // Fixed height to ensure consistent spacing
          }}
        >
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand 
              as={Link} 
              to="/" 
              className={`text-uppercase fw-bold d-flex align-items-center ${darkMode ? "text-light" : "text-dark"}`}
            >
              <img 
                src={logoBg} 
                alt="Logo" 
                width="30" 
                height="30" 
                className="d-inline-block align-top me-2 rounded-circle"
                style={{ 
                  border: darkMode ? "2px solid rgba(255,255,255,0.2)" : "2px solid rgba(0,0,0,0.1)",
                  objectFit: "cover"
                }}
              />
              <span 
                style={{ 
                  background: darkMode 
                    ? "linear-gradient(90deg, #ffffff, #a8a8a8)" 
                    : "linear-gradient(90deg, #212529, #495057)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: darkMode ? "transparent" : "transparent",
                  fontSize: "1.2rem",
                  letterSpacing: "0.5px"
                }}
              >
                Bonfeb
              </span>
            </Navbar.Brand>
            
            <button 
              onClick={handleShow} 
              className={`border-0 d-lg-none ${darkMode ? "text-light" : "text-dark"}`}
              style={{ 
                background: "transparent", 
                fontSize: "1.25rem",
                padding: "4px 8px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              aria-label="Open menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            
            <Nav className="ms-auto text-uppercase d-none d-lg-flex">
              {navLinks.map((link, index) => (
                <Nav.Link 
                  key={index}
                  as={Link} 
                  to={link.to} 
                  className={`position-relative mx-1 ${darkMode ? "text-light" : "text-dark"}`}
                  style={{ 
                    fontWeight: location.pathname === link.to ? "600" : "400",
                    opacity: location.pathname === link.to ? 1 : 0.8,
                    transition: "all 0.2s ease"
                  }}
                >
                  {link.text}
                  {location.pathname === link.to && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="position-absolute"
                      style={{ 
                        height: "3px", 
                        width: "70%", 
                        bottom: "0", 
                        left: "15%", 
                        background: darkMode 
                          ? "linear-gradient(90deg, #ffffff, #198754)" 
                          : "linear-gradient(90deg, #6610f2, #198754)",
                        borderRadius: "1px"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </Navbar>
      </motion.div>

      {/* Offcanvas Mobile Menu */}
      <AnimatePresence>
        {show && (
          <Offcanvas 
            show={show} 
            onHide={handleClose} 
            placement="end"
            style={{ 
              width: "80%", 
              maxWidth: "300px",
              background: darkMode 
                ? "linear-gradient(135deg, rgb(35, 55, 40), rgb(20, 42, 25))" 
                : "linear-gradient(135deg, rgb(255, 255, 255), rgb(240, 245, 240))"
            }}
          >
            <Offcanvas.Header className="border-bottom" style={{ borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}>
              <button 
                onClick={handleClose}
                className={`ms-auto border-0 ${darkMode ? "text-light" : "text-dark"}`}
                style={{ 
                  background: "transparent", 
                  fontSize: "1.25rem",
                  padding: "4px 8px",
                  borderRadius: "4px"
                }}
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </Offcanvas.Header>
            
            <div className="text-center w-100 my-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src={logoBg}
                  alt="Bonfeb Logo"
                  className="img-fluid rounded-circle"
                  style={{ 
                    width: "120px", 
                    height: "120px", 
                    objectFit: "cover", 
                    boxShadow: darkMode 
                      ? "0 0 0 8px rgba(255,255,255,0.1)" 
                      : "0 0 0 8px rgba(0,0,0,0.05)",
                  }}
                />
              </motion.div>
              <motion.h5
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`mt-3 text-uppercase fw-bold ${darkMode ? "text-light" : "text-dark"}`}
              >
                Bonfeb
              </motion.h5>
              <div 
                className="mx-auto mt-2 mb-4" 
                style={{ 
                  height: "3px", 
                  width: "40px", 
                  borderRadius: "2px",
                  background: darkMode 
                    ? "linear-gradient(90deg, #ffffff, #198754)" 
                    : "linear-gradient(90deg, #6610f2, #198754)" 
                }}
              ></div>
            </div>
            
            <Offcanvas.Body className="d-flex flex-column justify-content-between p-0">
              <Nav className="flex-column w-100">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <Nav.Link 
                      as={Link} 
                      to={link.to} 
                      onClick={handleClose}
                      className={`text-center py-3 position-relative ${location.pathname === link.to ? 'active' : ''}`}
                      style={{ 
                        background: location.pathname === link.to 
                          ? darkMode 
                            ? "rgba(255,255,255,0.1)" 
                            : "rgba(0,0,0,0.05)" 
                          : "transparent",
                        color: darkMode 
                          ? "#ffffff" 
                          : "#212529",
                        fontWeight: location.pathname === link.to ? "600" : "400",
                        borderLeft: location.pathname === link.to 
                          ? darkMode 
                            ? "4px solid #ffffff" 
                            : "4px solid #198754" 
                          : "4px solid transparent",
                      }}
                    >
                      {link.text}
                    </Nav.Link>
                  </motion.div>
                ))}
              </Nav>
              
              <div className="text-center mb-4 mt-auto">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 0.7 }}
                  className={`small mb-0 ${darkMode ? "text-light" : "text-dark"}`}
                  style={{ opacity: 0.7 }}
                >
                  © 2025 Bonfeb Portfolio
                </motion.p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navibar;