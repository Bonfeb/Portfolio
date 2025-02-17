import React, { useContext } from "react";
import { skills } from "../assets/data"; // Make sure this data exists
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../components/Footer";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container fluid id="body" className={`mt-5 pt-4 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h2 className="text-center text-uppercase mb-4">🛠 Skills 🛠</h2><hr/>
      <Row>
        {skills.map((skill) => (
          <Col md={4} key={skill.id} className="mb-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className={`shadow-lg border-0 ${darkMode ? "bg-secondary text-light" : "bg-white text-dark"}`}>
                <Card.Body className="text-center">
                  <Image src={skill.image} alt={skill.skill_name} width="90" className="mb-3 img-fluid rounded" />
                  <h5>{skill.skill_name}</h5>
                  <hr/>
                  <p>{skill.description}</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Footer/>
    </Container>
    
  );
};

export default Skills;
