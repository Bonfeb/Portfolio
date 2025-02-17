import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { resumes } from "../assets/data";
import { Container, Card, ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaPhone, FaBriefcase, FaDownload, FaCertificate, FaSchool, FaBookReader } from "react-icons/fa"; 
import logoBg from "../assets/images/logoBg.jpg";
import Footer from "../components/Footer";

const Resume = () => {
  const { darkMode } = useContext(ThemeContext);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Mwachiro Nyale CV.pdf"; // Update this path to the actual resume file
    link.download = "Mwachiro Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid id="body" className={`mt-5 pt-4 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {resumes.map((resume) => (
        <motion.div 
          key={resume.id}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Card className={`mb-4 shadow-lg border-0 rounded ${darkMode ? "bg-secondary text-light" : "bg-white text-dark"}`}>
            <Card.Header className="text-white text-center" style={{ background: darkMode ? "#333" : "linear-gradient(to right, rgb(5, 61, 121), rgb(41, 21, 72))" }}>
              <h4 className="mb-0"> {resume.name} - {resume.profession}</h4>
            </Card.Header>

            <Card.Body>
              {/* Image + Education + Experience Row */}
              <Row className="align-items-stretch">
                <Col md={4} className="d-flex justify-content-center">
                  <Image src={logoBg} rounded fluid className="border p-1 h-100 w-100" />
                </Col>

                <Col md={4} className="d-flex flex-column">
                  <Card className="flex-fill">
                    <Card.Header className="text-center"><FaBriefcase /> <strong>Experience</strong></Card.Header>
                    <Card.Body>
                      <ListGroup variant="flush">
                        {resume.experiences.map((exp) => (
                          <ListGroup.Item key={exp.id}>
                            <strong>{exp.title}</strong> - {exp.company} ({exp.duration})
                            <ul>
                              {exp.responsibilities.map((task, index) => (
                                <li key={index}>{task}</li>
                              ))}
                            </ul>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={4} className="d-flex flex-column">
                  <Card className="flex-fill">
                    <Card.Header className="text-center"><FaBookReader/> <strong>Learning</strong></Card.Header>
                    <Card.Body>
                    <h5 className="mt-3"><FaSchool /> School</h5>
                    <ListGroup>
                        {resume.education.map((edu) => (
                          <ListGroup.Item key={edu.id}>
                            <strong>{edu.achievement}</strong> - {edu.institute} ({edu.year})<br/>
                            <ul>
                              {edu.description.map((task, index) => (
                                <li key={index}>{task}</li>
                              ))}
                            </ul>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>

                      {/* Certification Section */}
                      <h5 className="mt-3"><FaCertificate /> Certifications</h5>
                      <ListGroup>
                        {resume.certifications.map((cert) => (
                          <ListGroup.Item key={cert.id}>
                            <ul>
                              <li>{cert.name}</li>
                            </ul>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>

                
              </Row>
            </Card.Body>

            {/* Referees Section */}
            <Card.Footer>
              <h5 className="text-center"><FaPhone /> Referees</h5>
              <hr/>
              <Row>
                {resume.referees.map((ref) => (
                  <Col md={6} key={ref.id}>
                    <Card className="p-2">
                      <strong>{ref.name}</strong> - {ref.position} <br />
                      Phone: {ref.phone} | Email: {ref.email}
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Download Resume Button */}
              <div className="text-center mt-3">
                <Button variant="success" onClick={handleDownload}>
                  <FaDownload className="me-2" /> Download Resume
                </Button>
              </div>
            </Card.Footer>

          </Card>
        </motion.div>
      ))}
      <Footer />
    </Container>
  );
};

export default Resume;
