import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Competenze() {
  return (
    <Card style={{ border: "2px dashed " }}>
      <Card.Body>
        <Card.Title>Competenze</Card.Title>
        <Card.Text>
          Fai capire se ha un profilo adatti per le nuove opportunità: il 50%
          dei recruiter usa i dati sulle competenze per coprire le posizioni
          aperte
        </Card.Text>
        <div className="text-secondary">
          <Card.Text className="fw-bold">Soft skill</Card.Text>
          <Card.Text className="fw-bold">Competenze tecniche</Card.Text>
        </div>
        <Button variant="outline-primary" className="mt-3 rounded-5">
          Aggiungi competenze
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Competenze;
