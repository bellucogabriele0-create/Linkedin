import { Card, Row, Col, Image, Button } from "react-bootstrap";

function Ppost() {
  return (
    <Card
      style={{
        width: "100%",
        border: "1px solid #e0e0e0",
      }}
    >
      <Card.Body style={{ padding: "16px" }}>
        <Row className="mb-3 align-items-center">
          <Col xs="auto">
            <Image
              src="https://placebear.com/100/100"
              roundedCircle
              style={{ width: "48px", height: "48px" }}
            />
          </Col>
          <Col>
            <div style={{ fontWeight: 600, fontSize: "16px" }}>
              Nome Cognome
            </div>
            <div style={{ fontSize: "14px", color: "grey" }}>
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </Col>
        </Row>

        <Card.Img
          className="mb-2"
          src="https://placebear.com/600/400"
          style={{ width: "100%", height: "auto" }}
        />

        <Row
          className="pt-3"
          style={{
            textAlign: "center",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <Col>
            <Button
              variant="light"
              style={{ fontSize: "14px", fontWeight: 500, width: "100%" }}
            >
              <i className="bi bi-hand-thumbs-up"></i> Consiglia
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              style={{ fontSize: "14px", fontWeight: 500, width: "100%" }}
            >
              <i className="bi bi-chat-right-text"></i> Commenta
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              style={{ fontSize: "14px", fontWeight: 500, width: "100%" }}
            >
              <i className="bi bi-arrow-repeat"></i> Diffondi
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              style={{ fontSize: "14px", fontWeight: 500, width: "100%" }}
            >
              <i className="bi bi-send-fill"></i> Invia
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Ppost;
