import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsAction } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Pamici = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const friends = useSelector((state) => state.friends.list || []);

  useEffect(() => {
    dispatch(getFriendsAction());
  }, [dispatch]);

  return (
    <Card className="p-3 my-3">
      <h6 className="fw-bold mb-3">Consigli per te</h6>

      {[...friends]
        .reverse()
        .slice(0, 3)
        .map((friend) => (
          <Row
            key={friend._id}
            className="align-items-center mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/profile/${friend._id}`)}
          >
            <Col xs="auto">
              <Image
                src={friend.image || "https://placebear.com/80/80"}
                roundedCircle
                style={{ width: "48px", height: "48px", objectFit: "cover" }}
              />
            </Col>

            <Col>
              <div className="fw-semibold">
                {friend.name} {friend.surname}
              </div>
              <div style={{ color: "grey" }}>
                {friend.title || "Professione"}
              </div>
            </Col>

            <Col xs="auto">
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-pill px-3"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Segui:", friend._id);
                }}
              >
                + Segui
              </Button>
            </Col>
          </Row>
        ))}
    </Card>
  );
};

export default Pamici;
