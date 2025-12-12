import { Card, Row, Col, Image, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Ppost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTNhOTRlZDhkYTViODAwMTVmMjU5MTgiLCJpYXQiOjE3NjU0NDY4OTMsImV4cCI6MTc2NjY1NjQ5M30.FO1eZlUO3haf8iza95j-cL651sF3QIvICdC6_GkvslU";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) throw new Error("Errore nel recupero dei post");

        const data = await res.json();

        const latest50 = data.slice(-50).reverse();

        setPosts(latest50);
      } catch (err) {
        console.error(err);
        setError("Errore nel caricamento post");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Caricamento post...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="mt-3">
      {posts.map((post) => (
        <Card
          key={post._id}
          style={{
            width: "100%",
            border: "1px solid #e0e0e0",
            marginBottom: "20px",
          }}
        >
          <Card.Body style={{ padding: "16px" }}>
            <Row className="mb-3 align-items-center">
              <Col xs="auto">
                <Image
                  src={
                    post.user?.image ||
                    "https://via.placeholder.com/100?text=User"
                  }
                  roundedCircle
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`/profile/${post.user?._id}`);
                  }}
                />
              </Col>
              <Col>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`/profile/${post.user?._id}`);
                  }}
                >
                  {post.user?.name} {post.user?.surname}
                </div>
                <div style={{ fontSize: "14px", color: "grey" }}>
                  {post.user?.title || "Utente LinkedIn"}
                </div>
              </Col>
            </Row>

            <p style={{ whiteSpace: "pre-wrap" }}>{post.text}</p>

            {post.image && (
              <Card.Img
                className="mb-2"
                src={post.image}
                style={{ width: "100%", height: "auto" }}
              />
            )}

            <Row
              className="pt-3 d-flex justify-content-between"
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
      ))}
    </div>
  );
}

export default Ppost;
