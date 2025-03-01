import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import NavBarComponent from '../../components/Navbar';
import Footer from '../../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.pageContainer}>
      <NavBarComponent />
      <Container className={styles.contactContainer}>
        <h1 className="text-center mb-4">Contact Us</h1>
        <Form onSubmit={handleSubmit} className={styles.contactForm}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Enter your message"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className={styles.submitButton}>
            Send Message
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact; 