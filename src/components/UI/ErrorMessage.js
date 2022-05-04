import { Alert } from "react-bootstrap";

function ErrorMessage({ errorMessage }) {
  return <Alert variant="danger">{errorMessage}</Alert>;
}

export default ErrorMessage;
