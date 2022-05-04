import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setCredentials((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onSubmitHandler = () => {
    onLogin(credentials);
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Todo App</h1>
      <hr />
      <Row>
        <Col md={5} xs={10} className="m-auto">
          <Card className="my-5 text-light">
            <Card.Body>
              <h2 className="text-center mb-5">Login</h2>
              <Form onSubmit={onSubmitHandler} className="mx-3">
                <Form.Group className="my-4" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    size="lg"
                    value={credentials.username}
                    onChange={onChangeHandler}
                  />
                </Form.Group>

                <Form.Group className="my-4" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    size="lg"
                    value={credentials.password}
                    onChange={onChangeHandler}
                  />
                </Form.Group>

                <div className="text-center mt-5 mb-3">
                  <Button type="submit" className="btn-lg px-5">
                    Go
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
