import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const twitter = import.meta.env.VITE_TWITTER;
  const facebook = import.meta.env.VITE_FACEBOOK;
  const github = import.meta.env.VITE_GITHUB;
  const linkedin = import.meta.env.VITE_LINKEDIN

  return (
    <footer className={`py-4 mt-5 text-white ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`} style={{background: 'linear-gradient(180deg, rgb(63, 77, 60), rgb(25, 52, 32))', color: 'orange'}}>
      <Container >
        <Row className="align-items-center text-center text-md-start">
          <Col md={6}>
            <p className="mb-0">&copy; {new Date().getFullYear()} <span className="text-uppercase">Bonfeb.</span> All Rights Reserved.</p>
          </Col>
          <Col md={6} className="d-flex justify-content-center justify-content-md-end gap-3">
            <Link to={facebook} target="_blank"  rel="noopener noreferrer" className={darkMode ? "text-light" : "text-dark"}>
              <FaFacebook size={24} />
            </Link>
            <Link to={twitter} target="_blank"  rel="noopener noreferrer" className={darkMode ? "text-light" : "text-dark"}>
              <FaTwitter size={24} />
            </Link>
            <Link to={linkedin} target="_blank"  rel="noopener noreferrer" className={darkMode ? "text-light" : "text-dark"}>
              <FaLinkedin size={24} />
            </Link>
            <Link to={github} target="_blank"  rel="noopener noreferrer" className={darkMode ? "text-light" : "text-dark"}>
              <FaGithub size={24} />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
