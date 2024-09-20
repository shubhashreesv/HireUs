
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
    

    
      <section className="vision-mission">
        <Container>
          <Row className="text-center">
            <Col md={6} className="animated fadeInLeft">
              <h2>Our Vision</h2>
              <p>
                To be the leading platform that bridges the gap between freelancers and employers, ensuring successful partnerships and sustainable growth.
              </p>
            </Col>
            <Col md={6} className="animated fadeInRight">
              <h2>Our Mission</h2>
              <p>
                Empower freelancers by providing innovative tools, robust opportunities, and a seamless experience for managing their projects and career.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features & Strategies Section */}
      <section className="features-strategies">
        <Container>
          <h2 className="text-center">Our Platform Features</h2>
          <Row>
            <Col md={4} className="animated fadeInUp">
              <h4>Freelance Marketplace</h4>
              <p>
                Find short-term jobs, gigs, and project-based opportunities tailored to your skill set.
              </p>
            </Col>
            <Col md={4} className="animated fadeInUp">
              <h4>Secure Payments with Escrow</h4>
              <p>
                We offer secure payment solutions with escrow to ensure peace of mind for both freelancers and employers.
              </p>
            </Col>
            <Col md={4} className="animated fadeInUp">
              <h4>AI-Powered Insights</h4>
              <p>
                Utilize AI to find better job matches and get personalized recommendations to advance your freelance career.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;