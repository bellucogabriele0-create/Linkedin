import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperienceForm from "./ExperienceForm";

const ExperienceModal = function ({ close }) {
  return (
    <Modal show onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Esperienza</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ExperienceForm />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
