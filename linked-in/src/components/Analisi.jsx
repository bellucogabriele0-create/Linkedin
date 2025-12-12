import { Card, Row, Col, Button } from "react-bootstrap";

const Analisi = () => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body className="pb-0">
        <Card.Title className="fw-bold">Analisi</Card.Title>
        <small className="text-muted">
          <i className="bi bi-eye-fill p-1"></i>Visibile solo a te
        </small>
        <Row className="mt-3">
          <Col className="d-flex gap-3">
            <i className="bi bi-people-fill fs-3"></i>
            <div>
              <p className="fw-bold m-0">0 visualizzazioni del profilo</p>
              <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
            </div>
          </Col>
          <Col className="d-flex gap-3">
            <i className="bi bi-bar-chart-line-fill fs-3"></i>
            <div>
              <p className="fw-bold m-0">0 impressioni dei post</p>
              <p className="m-0">Crea un post per aumentare l’interesse.</p>
              <p className="text-muted">Ultimi 7 giorni</p>
            </div>
          </Col>
          <Col className="d-flex gap-3">
            <i className="bi bi-search fs-3"></i>
            <div>
              <p className="fw-bold m-0">0 comparse nelle ricerche</p>
              <p>
                Aggiorna il tuo profilo per comparire di più nei risultati di
                ricerca.
              </p>
            </div>
          </Col>
          <hr className="m-0 mt-3" />
          <Button
            className="p-3"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#464646ff",
            }}
          >
            Mostra tutto →
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Analisi;
