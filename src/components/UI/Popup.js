import { Modal } from "react-bootstrap";

function Popup({ showPopup, setShowPopup, todo }) {
  return (
    <>
      <Modal show={showPopup} onHide={() => setShowPopup(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Todo Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>{todo.title}</h5>
            <span>Id: {todo.id}</span><br />
            <span>User Id: {todo.userId}</span><br />
            <span>Is Completed: {todo.completed.toString()}</span>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;
