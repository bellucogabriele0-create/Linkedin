import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperienceForm from "./ExperienceForm";

const ExperienceModal = function () {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ExperienceForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ExperienceModal;
