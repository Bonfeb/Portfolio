import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import slideImg1 from "../assets/images/slideImage1.jpg";
import slideImg2 from "../assets/images/slideImage2.jpg";
import slideImg3 from "../assets/images/slideImage3.jpg";
import Footer from "../components/Footer"

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container id="body"
      fluid 
      className={`d-flex flex-column min-vh-100 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {/* Main Content (Takes Remaining Space) */}
      <Row className="flex-grow-1 align-items-center justify-content-center">
        {/* Left: Image Carousel */}
        <Col md={6} className="mb-4">
          <Carousel fade interval={3000} className="rounded shadow">
            {[
              { img: slideImg1 },
              { img: slideImg2},
              { img: slideImg3},
            ].map((slide, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 rounded"
                  style={{ height: "500px", objectFit: "cover" }}
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Right: Bio Data Card */}
        <Col md={6} className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className={`p-4 text-center shadow-lg border-0 rounded ${darkMode ? "bg-secondary text-light" : "bg-white text-dark"}`}>
              <Card.Body>
                <Card.Title className="text-uppercase fw-bold fs-4">Stephen Bonfeb</Card.Title>
                <hr />
                <Card.Text className="fst-italic">
                  Building web applications with React and Django. Exploring mobile development using React.js.
                </Card.Text>
                <hr />
                <div className="text-start">
                  <p className="mb-2">➤ <strong>Profession:</strong> <span className="text-muted">Bsc Information Technology</span></p>
                  <p className="mb-2">➤ <strong>Specialization:</strong> <span className="text-muted">Software Development</span></p>
                  <p className="mb-2">
                    ➤ <FaPhone className="text-primary me-2" />
                    <Link to="tel:+254712345678" className="text-decoration-none text-muted">+254 794544826</Link>
                  </p>
                  <p className="mb-2">
                    ➤ <FaEnvelope className="text-danger me-2" />
                    <Link to="mailto:abcdefgh@gmail.com" className="text-decoration-none text-muted">bonfebdevs@gmail.com</Link>
                  </p>
                  <p className="mb-2">
                    ➤ <FaGlobe className="text-success me-2" />
                    <Link to="https://bonfebportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">
                    https://bonfebportfolio.netlify.app/
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Container fluid>
            <marquee><span className="text-uppercase" style={{color: 'red'}}><strong>Welcome! It is Nice you are here.</strong></span></marquee>
      </Container>
      {/* Footer (Remains at Bottom) */}
      <Footer />
    </Container>
  );
};

export default Home;
