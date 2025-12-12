import { Card, Row, Col, Button, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsProfile } from "../redux/actions";
import PostModal from "./PostModal";

const AnalisiAttivita = ({ viewingMyProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postIdToEdit, setPostIdToEdit] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const profileData = useSelector((currentState) => {
    return currentState.profile.content;
  });
  const allPosts = useSelector((currentState) => {
    return currentState.profile.posts;
  });
  const openModal = (postId = null) => {
    if (!viewingMyProfile) return;
    setPostIdToEdit(postId);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setPostIdToEdit(null);
  };

  return (
    <Row>
      <Col sm={12}>
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
                  {viewingMyProfile && (
                    <Button
                      variant="outline-primary px-2"
                      size="sm"
                      style={{ borderRadius: "30px" }}
                      onClick={() => openModal()}
                    >
                      Crea un post
                    </Button>
                  )}
                  {isModalOpen && (
                    <PostModal close={closeModal} postId={postIdToEdit} />
                  )}
                </div>
              </Col>
              {allPosts.filter((post) => post.username === profileData.username)
                .length > 0 ? (
                allPosts

                  .filter((post) => post.username === profileData.username)
                  .reverse()
                  .map((post) => (
                    <Col
                      key={post._id}
                      onClick={() => openModal(post._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <Card
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
                                  profileData.image ||
                                  "https://via.placeholder.com/100?text=User"
                                }
                                roundedCircle
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  objectFit: "cover",
                                }}
                              />
                            </Col>
                            <Col>
                              <div
                                style={{ fontWeight: 600, fontSize: "16px" }}
                              >
                                {profileData.name} {profileData.surname}
                              </div>
                              <div style={{ fontSize: "14px", color: "grey" }}>
                                {profileData.title || "Utente LinkedIn"}
                              </div>
                            </Col>
                          </Row>

                          <p style={{ whiteSpace: "pre-wrap" }}>{post.text}</p>

                          {/* {post.image && (
                            <Card.Img
                              className="mb-2"
                              src={post.image}
                              style={{ width: "100%", height: "auto" }}
                            />
                          )} */}

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
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  width: "100%",
                                }}
                              >
                                <i className="bi bi-hand-thumbs-up"></i>{" "}
                                Consiglia
                              </Button>
                            </Col>
                            <Col>
                              <Button
                                variant="light"
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  width: "100%",
                                }}
                              >
                                <i className="bi bi-chat-right-text"></i>{" "}
                                Commenta
                              </Button>
                            </Col>
                            <Col>
                              <Button
                                variant="light"
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  width: "100%",
                                }}
                              >
                                <i className="bi bi-arrow-repeat"></i> Diffondi
                              </Button>
                            </Col>
                            <Col>
                              <Button
                                variant="light"
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  width: "100%",
                                }}
                              >
                                <i className="bi bi-send-fill"></i> Invia
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
              ) : (
                <Col>
                  <p className="mt-3 fs-5 fw-medium m-0">
                    Non hai ancora pubblicato nulla
                  </p>
                  <p className="mt-1">I post che condividi appariranno qui</p>
                </Col>
              )}

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
