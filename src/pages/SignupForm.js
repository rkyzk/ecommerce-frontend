import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

/**
 * Return sign up form.
 */
const SignUpForm = () => {
  /** stores info about which pages the user has visited. */
  const navigate = useNavigate();
  /** registerData will store data entered by users. */
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  /** destructure 'registerData' */
  const { username, email, password1, password2 } = registerData;
  /** stores errors */
  const [errors, setErrors] = useState({});

  /**
   * Set the data entered by users to
   * 'registerData.'
   */
  const handleChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Send the data entered by users to the backend.
   * Redirect the user to signin page.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("api/1.0/signup/", registerData);
      navigate("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container style={{ width: "360px" }}>
      <h1>sign up</h1>
      <Form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginBottom: "5px" }}
      >
        <Form.Group controlId="username">
          <Form.Label className="d-none">username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="warning" key={idx} className="mt-1">
            {message}
          </Alert>
        ))}
        <Form.Group controlId="email">
          <Form.Label className="d-none">email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.email?.map((message, idx) => (
          <Alert variant="warning" key={idx} className="mt-1">
            {message}
          </Alert>
        ))}
        <Form.Group controlId="password1" className="mt-1">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password1?.map((message, idx) => (
          <Alert variant="warning" key={idx} className="mt-1">
            {message}
          </Alert>
        ))}
        <Form.Group controlId="password2" className="mt-1">
          <Form.Label className="d-none">Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password2?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Button type="submit">Sign up</Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
      </Form>
      <Link to="/login">
        Already have an account? <span>Log in</span>
      </Link>
    </Container>
  );
};

export default SignUpForm;
