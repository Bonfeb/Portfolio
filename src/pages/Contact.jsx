import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faComment } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import contactBg from "../assets/images/contactBg.jpg";
import emailjs from "@emailjs/browser"; // Install using: npm install emailjs-com

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [variant, setVariant] = useState("success");
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_USER_ID; // Public Key from EmailJS

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        setVariant("success");
        setResponseMessage("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        setVariant("danger");
        setResponseMessage("❌ Failed to send message. Try again later.");
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <>
      <section
        id="contact"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "0",
          padding: "60px 0",
          color: "#fff",
          textShadow: "1px 1px 3px rgba(0,0,0,0.7)", // Improves text visibility
        }}
      >
        <Container className="mt-2 pt-4">
          <Row className="text-center">
            <Col>
              <h2 className="text-uppercase fw-bold">Contact Me</h2>
              <h5 className="text-light">Feel free to reach out!</h5>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8} className="p-4 bg-light rounded shadow-lg">
              {responseMessage && <Alert variant={variant}>{responseMessage}</Alert>}
              
              <div className="p-4 rounded shadow-lg" 
      style={{ 
        background: "linear-gradient(90deg,rgb(33, 16, 61), rgb(106, 112, 118))", 
        color: "white" 
      }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FontAwesomeIcon icon={faUser} className="me-2 text-primary" /> Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" /> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" /> Phone
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Your Phone *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <FontAwesomeIcon icon={faComment} className="me-2 text-primary" /> Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Your Message *"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" className="text-uppercase" disabled={loading}>
                    {loading ? <Spinner animation="border" size="sm" className="me-2" /> : "Send Message"}
                  </Button>
                </div>
              </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
