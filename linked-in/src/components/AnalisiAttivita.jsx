import { Card, Row, Col, Button } from "react-bootstrap";

const AnalisiAttivita = () => {
  return (
    <Row>
      <Col sm={12}>
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
                    Aggiorna il tuo profilo per comparire di più nei risultati
                    di ricerca.
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
        <Card className="shadow-sm mb-4">
          <Card.Body className="pb-0">
            <Row className="mt-2 d-flex flex-column">
              <Col className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <Card.Title className="fw-bold">Attività</Card.Title>

                  <p
                    className="text-primary fw-bold m-0"
                    style={{ cursor: "pointer" }}
                  >
                    0 follower
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-primary px-2"
                    size="sm"
                    style={{ borderRadius: "30px" }}
                  >
                    Crea un post
                  </Button>
                  <i className="bi bi-pencil-fill fs-5 p-2"></i>
                </div>
              </Col>
              <Col>
                <p className="mt-3 fs-5 fw-medium m-0">
                  Non hai ancora pubblicato nulla
                </p>
                <p className="mt-1">I post che condividi appariranno qui</p>
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
      </Col>
    </Row>
  );
};
export default AnalisiAttivita;
