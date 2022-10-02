import React, { useEffect, useState } from 'react';
import {
  Alert, Button,
  Col,
  Container,
  Form,
  Row,
  Spinner
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { newUserRegistration } from './userRegAction';

const initialState = {
  // name: "Shawn Kebel",
  // phone: "6273837374",
  // email: "essy@eclave.com",
  // company: "gggsjje",
  // address: "esfssd dfgdsf north street",
  // password: "Yoshi1988*",
  // confirmPass: "Yoshi1988*",
};

const passVerificationError = {
  isLengthy: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpcChr: false,
  confirmPass: false,
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { isLoading, status, message } = useSelector(state => state.registration);

  useEffect(() => {}, [newUser]);

  const handleOnChange = e => {
    const {name, value} = e.target;

    setNewUser({ ...newUser, [name]: value });

    if (name === 'password') {
      const isLengthy = value.length >=8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpcChr = /[!,#,-,$,*,/,+,&,%]/.test(value);

      setPasswordError({
        ...passwordError,
        isLengthy,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpcChr,
      });
    }

    if(name === 'confirmPass') {
      setPasswordError({
        ...passwordError,
        confirmPass: newUser.password === value,
      });
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    // console.log(newUser);
    const {
      name,
      phone,
      email,
      company,
      address,
      password
    } = newUser;

    const newRegistration = {
      name,
      phone,
      email,
      company,
      address,
      password
    };
    dispatch(newUserRegistration(newRegistration));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-grad">User Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status ===
              "success" ? "success" : "danger"}
            >
              {message}
            </Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>

            <Form.Group className="mb-3">
              <Form.Label className="text-grad">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleOnChange}
                placeholder="Your name"
                required
                className="shado"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-grad">Phone #</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={newUser.phone}
                onChange={handleOnChange}
                placeholder="Your phone"
                required
                className="shado"
              />
              <Form.Text className="text-muted">
                ** We'll never share your phone #.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-grad">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="Your email"
                required
                className="shado"
              />
              <Form.Text className="text-muted">
                ** We'll never share your email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-grad">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={newUser.company}
                onChange={handleOnChange}
                placeholder="Company name"
                required
                className="shado"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-grad">Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={newUser.address}
                onChange={handleOnChange}
                placeholder="Full address"
                required
                className="shado"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-grad">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Password"
                required
                className="shado"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-grad">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPass"
                value={newUser.confirmPass}
                onChange={handleOnChange}
                placeholder="Confirm password"
                required
                className="shado"
              />
            </Form.Group>

            <Form.Text>
              {!passwordError.confirmPass && (
                <div className="text-danger mb-3">
                  Password doesn't match!
                </div>
              )}
            </Form.Text>

            <ul className="mb-4">
              <li className={passwordError.isLengthy ? "text-success" : "text-danger"}>
                Min. 8 characters.
              </li>
              <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>
                At least one uppercase.
              </li>
              <li className={passwordError.hasLower ? "text-success" : "text-danger"}>
                At least one lowercase.
              </li>
              <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>
                At least one number.
              </li>
              <li className={passwordError.hasSpcChr ? "text-success" : "text-danger"}>
                At least one special (# ! - $ * % + &).
              </li>
            </ul>

            <Button
              variant="primary"
              type="submit"
              disabled={Object.values(passwordError).includes(false)}
              className="freedom-grad-rd shado bold6"
            >
              Submit
            </Button>
            {isLoading && <Spinner variant="info" animation="border" />}
          </Form>
        </Col>
      </Row>

      <Row className="py-3">
        <Col>
          <span className="bold6">Already registered? </span><a href="/">Login Now</a>
        </Col>
      </Row>

    </Container>
  );
};

export default RegistrationForm;


