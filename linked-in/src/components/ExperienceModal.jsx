import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ExperienceForm from "./ExperienceForm";

const ExperienceModal = function ({ close, espid }) {
  return (
    <Modal show onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>
          {espid ? "Modifica Esperienza" : "Aggiungi Esperienza"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ExperienceForm experienceId={espid} close={close} />
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
