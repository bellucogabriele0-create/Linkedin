import { Container, Col, Row, Card, Form, Image } from "react-bootstrap";

const Paggiungi = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Card className="p-3">
          <Row className="align-items-center mb-2">
            <Col xs="auto">
              <Image
                src="https://placebear.com/100/100"
                roundedCircle
                style={{ width: "48px", height: "48px" }}
              />
            </Col>

            <Col>
              <Form.Control
                type="text"
                placeholder="Crea un post"
                style={{
                  borderRadius: "30px",
                  padding: "10px 15px",
                }}
              />
            </Col>
          </Row>

          <Row className="text-center mt-3">
            <Col>
              <i
                className="bi bi-play-btn-fill"
                style={{ color: "green", fontSize: "20px" }}
              ></i>
              <span className="ms-2">Video</span>
            </Col>
            <Col>
              <i
                className="bi bi-image"
                style={{ color: "blue", fontSize: "20px" }}
              ></i>
              <span className="ms-2">Foto</span>
            </Col>
            <Col>
              <i
                className="bi bi-card-text"
                style={{ color: "red", fontSize: "20px" }}
              ></i>
              <span className="ms-2">Scrivi un articolo</span>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default Paggiungi;
