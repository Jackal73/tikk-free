import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-grad text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label className="text-grad">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>


           <div className="center">
           <Button type="submit" className="freedom-grad-rd shado bold6">Reset Password</Button>
           </div>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col className="">
          <a href="#!" onClick={() => formSwitcher('login')}>Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,


  email: PropTypes.string.isRequired,
}
