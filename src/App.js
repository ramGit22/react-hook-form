import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Contact Us</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                isInvalid={!!errors.name}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                isInvalid={!!errors.email}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: 'Invalid email format',
                  },
                })}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                isInvalid={!!errors.subject}
                {...register('subject', { required: 'Subject is required' })}
              />
              {errors.subject && (
                <Form.Control.Feedback type="invalid">
                  {errors.subject.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your message"
                isInvalid={!!errors.message}
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.message.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
