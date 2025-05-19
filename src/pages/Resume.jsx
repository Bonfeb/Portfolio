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
    link.href = "/files/Mwachiro Nyale CV.pdf"; // Update to your actual file path
    link.download = "Mwachiro Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const bgClass = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  const cardBg = darkMode ? "bg-secondary text-light" : "bg-white text-dark";
  const headerBg = darkMode ? "#222" : "linear-gradient(to right, #053d79, #291548)";

  return (
    <Container fluid id="body" className={`py-5 ${bgClass}`}>
      <h2 className="text-center mb-4 text-uppercase">📄 Resume</h2>
      <hr className="mb-4" style={{ opacity: 0.2 }} />
      {resumes.map((resume) => (
        <motion.div
          key={resume.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className={`mb-5 shadow rounded-4 ${cardBg}`}>

            {/* Header */}
            <Card.Header
              className="text-white text-center rounded-top-4"
              style={{
                background: headerBg,
                padding: "1.25rem",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              {resume.name} - {resume.profession}
            </Card.Header>

            {/* Body */}
            <Card.Body>
              <Row className="g-4">
                {/* Profile Image */}
                <Col xs={12} md={4}>
                  <Image
                    src={logoBg}
                    rounded
                    fluid
                    className="border p-2 shadow-sm w-100"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </Col>

                {/* Experience */}
                <Col xs={12} md={4}>
                  <Card className={`mb-3 border-0 shadow-sm ${cardBg}`}>
                    <Card.Header className="text-center fw-bold">
                      <FaBriefcase className="me-2" /> Experience
                    </Card.Header>
                    <Card.Body>
                      <ListGroup variant="flush">
                        {resume.experiences.map((exp) => (
                          <ListGroup.Item key={exp.id} className={darkMode ? "bg-dark text-light" : ""}>
                            <strong>{exp.title}</strong> – {exp.company} ({exp.duration})
                            <ul>
                              {exp.responsibilities.map((task, idx) => (
                                <li key={idx}>{task}</li>
                              ))}
                            </ul>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Education + Certifications */}
                <Col xs={12} md={4}>
                  <Card className={`mb-3 border-0 shadow-sm ${cardBg}`}>
                    <Card.Header className="text-center fw-bold">
                      <FaBookReader className="me-2" /> Learning
                    </Card.Header>
                    <Card.Body>
                      <h6 className="mt-3 fw-bold"><FaSchool className="me-2" /> Education</h6>
                      <ListGroup variant="flush">
                        {resume.education.map((edu) => (
                          <ListGroup.Item key={edu.id} className={darkMode ? "bg-dark text-light" : ""}>
                            <strong>{edu.achievement}</strong> – {edu.institute} ({edu.year})
                            <ul>
                              {edu.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                              ))}
                            </ul>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>

                      <h6 className="mt-4 fw-bold"><FaCertificate className="me-2" /> Certifications</h6>
                      <ListGroup variant="flush">
                        {resume.certifications.map((cert) => (
                          <ListGroup.Item key={cert.id} className={darkMode ? "bg-dark text-light" : ""}>
                            <li>{cert.name}</li>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>

            {/* Referees & Download */}
            <Card.Footer className="text-center">
              <h5 className="mb-3"><FaPhone className="me-2" /> Referees</h5>
              <Row className="g-3">
                {resume.referees.map((ref) => (
                  <Col xs={12} md={6} key={ref.id}>
                    <Card className={`p-3 border-0 shadow-sm ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
                      <strong>{ref.name}</strong> – {ref.position} <br />
                      Phone: {ref.phone} <br />
                      Email: {ref.email}
                    </Card>
                  </Col>
                ))}
              </Row>

              <Button
                variant="success"
                className="mt-4 px-4 py-2 rounded-pill shadow-sm"
                onClick={handleDownload}
              >
                <FaDownload className="me-2" /> Download Resume
              </Button>
            </Card.Footer>
          </Card>
        </motion.div>
      ))}
      <Footer />
    </Container>
  );
};

export default Resume;
