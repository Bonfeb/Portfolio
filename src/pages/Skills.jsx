import React, { useContext, useEffect } from "react";
import { skills } from "../assets/data"; // Make sure this data exists
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../components/Footer";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  // To remove the gap between navbar and content
  useEffect(() => {
    // Set the body padding to accommodate fixed navbar without extra space
    document.body.style.paddingTop = "56px"; // Standard Bootstrap navbar height
    
    return () => {
      // Clean up when component unmounts
      document.body.style.paddingTop = "0";
    };
  }, []);

  return (
    <Container 
      fluid 
      id="body" 
      className={`py-4 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{ 
        minHeight: "calc(100vh - 56px)", // Subtract navbar height
        background: darkMode 
          ? "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)" 
          : "linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)"
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="position-relative text-center mb-4">
            <h2 className={`display-5 fw-bold text-uppercase position-relative d-inline-block ${darkMode ? "text-light" : "text-dark"}`}>
              My Skills
            </h2>
            <div className="position-relative d-flex justify-content-center">
              <div style={{ 
                height: "4px", 
                width: "80px", 
                background: "linear-gradient(90deg, #6610f2, #198754)", 
                borderRadius: "2px",
                marginTop: "8px"
              }}></div>
            </div>
          </div>
        </motion.div>
      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-5"
        >
          <Row className="g-4">
            {skills.map((skill) => (
              <Col xs={12} sm={6} lg={4} key={skill.id}>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: darkMode 
                      ? "0 10px 20px rgba(0,0,0,0.3)" 
                      : "0 10px 20px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`card h-100 border-0 overflow-hidden ${darkMode ? "bg-dark" : "bg-white"}`}
                  style={{ 
                    borderRadius: "12px",
                    boxShadow: darkMode 
                      ? "0 5px 15px rgba(0,0,0,0.3)" 
                      : "0 5px 15px rgba(0,0,0,0.08)"
                  }}
                >
                  <div className="card-body d-flex flex-column align-items-center p-4">
                    <div className={`icon-container mb-3 p-3 rounded-circle d-flex align-items-center justify-content-center ${darkMode ? "bg-dark" : "bg-light"}`} 
                      style={{ 
                        width: "90px", 
                        height: "90px", 
                        boxShadow: darkMode 
                          ? "0 0 0 8px rgba(255,255,255,0.05)" 
                          : "0 0 0 8px rgba(0,0,0,0.03)"
                      }}
                    >
                      <img 
                        src={skill.image} 
                        alt={skill.skill_name} 
                        className="img-fluid" 
                        style={{ 
                          maxWidth: "60px", 
                          maxHeight: "60px", 
                          filter: darkMode ? "brightness(0.9)" : "none",
                          transition: "transform 0.3s ease"
                        }} 
                      />
                    </div>
                    
                    <h4 className={`fw-bold mb-2 ${darkMode ? "text-light" : "text-dark"}`} style={{ fontSize: "1.25rem" }}>
                      {skill.skill_name}
                    </h4>
                    
                    <div className="w-25 my-2" style={{ 
                      height: "2px", 
                      background: "linear-gradient(90deg, #6610f2, #198754)", 
                      borderRadius: "1px" 
                    }}></div>
                    
                    <p className={`text-center mb-0 mt-2 ${darkMode ? "text-light opacity-75" : "text-muted"}`}>
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
      <Footer/>
    </Container>
  );
};

export default Skills;