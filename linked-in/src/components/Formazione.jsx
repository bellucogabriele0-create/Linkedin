import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Formazione() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Formazione</Card.Title>
        <Card.Text>
          mostrando le tue qualifiche avrai fino a 2 volte più probabilità di
          ricevere un messaggio InMail da un recruiter.
        </Card.Text>
        <div className="text-secondary">
          <Card.Text className=" **fw-bold**">Scuola Universitaria</Card.Text>
          <Card.Text className="">Laurea, campo di studi</Card.Text>
          <Card.Text className="">2023- Presente · 2 anni </Card.Text>
        </div>
        <Button variant="outline-primary">Aggiungi il titolo di studio</Button>
      </Card.Body>
    </Card>
  );
}

export default Formazione;
