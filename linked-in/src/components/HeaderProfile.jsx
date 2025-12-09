import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HeaderProfile = function () {
  return (
    <Row>
      <Col xs={12}>
        <Card className="rounded-3">
          <Card.Img variant="top" src="https://placecats.com/800/300" />
          <Card.Body>
            <Card.Title>Nome Cognome</Card.Title>
            <Card.Text>BIO </Card.Text>
            <Button variant="primary btn-rounded-pill">Disponibile per</Button>
            <Button variant="primary btn-rounded-pill">Aggiungi sezione</Button>
            <Button variant="primary btn-rounded-pill">Migliora profilo</Button>
            <Button variant="primary btn-rounded-pill">ICONA 3 puntini</Button>
            <Row></Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default HeaderProfile;
