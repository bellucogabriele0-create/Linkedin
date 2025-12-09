import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

function Formazione() {
  return (
    <Card style={{ border: "2px dashed " }} className="mb-3">
      <Card.Body>
        <Card.Title>Formazione</Card.Title>
        <Card.Text>
          mostrando le tue qualifiche avrai fino a 2 volte più probabilità di
          ricevere un messaggio InMail da un recruiter.
        </Card.Text>

        <div className="d-flex align-items-start gap-3 text-secondary mt-">
          <FontAwesomeIcon
            icon={faSchool}
            style={{ color: "#acacac", fontSize: "50px" }}
          />

          <div>
            <Card.Text className="fw-bold">Scuola Universitaria</Card.Text>
            <Card.Text>Laurea, campo di studi</Card.Text>
            <Card.Text>2023 - Presente · 2 anni</Card.Text>
          </div>
        </div>

        <Button variant="outline-primary" className="mt-3 rounded-5">
          Aggiungi il titolo di studio
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Formazione;
