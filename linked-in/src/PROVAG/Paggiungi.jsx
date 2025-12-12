import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostModal from "../components/PostModal";

function Paggiungi() {
  const profile = useSelector((state) => state.profile.content);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const initial = profile?.name?.charAt(0).toUpperCase() || "U";
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Card className="p-3">
          <Row className="align-items-center mb-2 d-flex">
            <Col xs="auto">
              <div
                onClick={() => navigate("/ProfilePage")}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#e2e2e2",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {profile?.image ? (
                  <img
                    src={profile.image}
                    alt="profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  initial
                )}
              </div>
            </Col>

            <Col className="d-flex">
              <Button
                className="flex-grow-1 text-start border-black"
                variant="transparent px-2"
                size="sm"
                style={{ borderRadius: "30px" }}
                onClick={() => openModal()}
              >
                Crea un post
              </Button>
              {isModalOpen && <PostModal close={closeModal} />}
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
}

export default Paggiungi;
