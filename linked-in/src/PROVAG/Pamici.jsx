import { Card, Row, Col, Image, Button } from "react-bootstrap";

const Pamici = () => {
  return (
    <Card className="p-3 my-3">
      <h6 className="fw-bold mb-3">Consigli per te</h6>

      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Image
            src="https://placebear.com/100/100"
            roundedCircle
            style={{ width: "48px", height: "48px" }}
          />
        </Col>

        <Col>
          <div className="fw-semibold">nome cognome</div>
          <div style={{ color: "grey" }}>CEO at Google</div>
        </Col>

        <Col xs="auto">
          <Button
            variant="outline-primary"
            size="sm"
            className="rounded-pill px-3"
          >
            + Segui
          </Button>
        </Col>
      </Row>

      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Image
            src="https://placebear.com/100/100"
            roundedCircle
            style={{ width: "48px", height: "48px" }}
          />
        </Col>

        <Col>
          <div className="fw-semibold">nome cognome</div>
          <div style={{ color: "grey" }}>CEO at Google</div>
        </Col>

        <Col xs="auto">
          <Button
            variant="outline-primary"
            size="sm"
            className="rounded-pill px-3"
          >
            + Segui
          </Button>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col xs="auto">
          <Image
            src="https://placebear.com/100/100"
            roundedCircle
            style={{ width: "48px", height: "48px" }}
          />
        </Col>

        <Col>
          <div className="fw-semibold">nome cognome</div>
          <div style={{ color: "grey" }}>CEO at Google</div>
        </Col>

        <Col xs="auto">
          <Button
            variant="outline-primary"
            size="sm"
            className="rounded-pill px-3"
          >
            + Segui
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
export default Pamici;
