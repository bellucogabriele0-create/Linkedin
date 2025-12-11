import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFriendsAction, getProfileById } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Pamici = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friends = useSelector((state) => state.friends.list || []);

  useEffect(() => {
    dispatch(getFriendsAction());
  }, [dispatch]);

  const handleClick = (friendId) => {
    dispatch(getProfileById(friendId));

    navigate(`/profile/${friendId}`);
  };

  return (
    <Card className="p-3 my-3">
      <h6 className="fw-bold mb-3">Consigli per te</h6>

      {[...friends]
        .reverse()
        .slice(0, 3)
        .map((friend) => (
          <Row key={friend._id} className="align-items-center mb-3">
            <Col xs="auto">
              <Image
                src={friend.image}
                roundedCircle
                style={{ width: "48px", height: "48px" }}
              />
            </Col>
            <Col
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(friend._id)}
            >
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
