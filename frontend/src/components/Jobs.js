import React, { useState } from 'react';
import './Jobs.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample jobs data
  const jobsData = [
    {
      title: 'React Developer',
      company: 'Tech Solutions Pvt. Ltd.',
      location: 'Bangalore, India',
      description: 'Looking for an experienced React developer to build a dynamic web platform.',
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
      type: 'Full-Time',
      salary: '$2000 - $3000/month',
      experience: 'Intermediate'
    },
    {
      title: 'Freelance Graphic Designer',
      company: 'Creative Studios',
      location: 'Remote',
      description: 'Designers needed for logo and brand identity projects. Work from home.',
      skills: ['Photoshop', 'Illustrator', 'Creativity'],
      type: 'Freelance',
      salary: '$500/project',
      experience: 'Beginner to Expert'
    },
    {
      title: 'Content Writer',
      company: 'Global Content Inc.',
      location: 'Remote',
      description: 'Looking for a content writer to create blog posts, articles, and social media content.',
      skills: ['Writing', 'SEO', 'Social Media'],
      type: 'Remote',
      salary: '$20/hour',
      experience: 'Entry-level'
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance Hub',
      location: 'Chennai, India',
      description: 'Experienced full-stack developer needed to build a freelancing platform.',
      skills: ['Node.js', 'React', 'MongoDB'],
      type: 'Contract-based',
      salary: '$2500/project',
      experience: 'Expert'
    },
  ];

  const filteredJobs = jobsData.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.join(', ').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="jobs-page">
      <Container>
        {/* Search Section */}
        <Row className="search-section mb-4">
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Search jobs by title, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button variant="primary" className="search-btn">Search</Button>
          </Col>
        </Row>

        {/* Job Listings */}
        <Row className="job-listings justify-content-between">
          {filteredJobs.map((job, index) => (
            <Col md={5} className="mb-4" key={index}>
              <Card className="job-card animated fadeInUp">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" >
                    {job.company} • {job.location}
                  </Card.Subtitle>
                  <Card.Text className="job-description">
                    {job.description}
                  </Card.Text>
                  <Card.Text className="job-skills">
                    <strong>Skills:</strong> {job.skills.join(', ')}
                  </Card.Text>
                  <Card.Text className="job-extras">
                    <strong>Job Type:</strong> {job.type} <br />
                    <strong>Salary:</strong> {job.salary} <br />
                    <strong>Experience:</strong> {job.experience}
                  </Card.Text>
                  <Button variant="success" className="apply-btn">Apply Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Jobs;