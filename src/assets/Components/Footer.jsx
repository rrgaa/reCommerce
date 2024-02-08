// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='footer-row'>
          <Col md={6}className='left'>
            <h5 className="footer-heading">Connect with Us</h5>
            <p className="footer-text">Follow us on social media for updates and promotions.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>
          <Col md={6}className='right'>
            <h5 className="footer-heading">Contact Information</h5>
            <p className="footer-text">Email: reCommerce@gmail.com</p>
            <p className="footer-text">Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p className="footer-copyright">&copy; 2024 reCommerce. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
