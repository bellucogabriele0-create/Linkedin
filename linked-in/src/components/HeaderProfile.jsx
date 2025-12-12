import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const HeaderProfile = function () {
  const profileData = useSelector((currentState) => {
    return currentState.profile.content;
  });
  return (
    <Row className="my-3">
      <Col xs={12}>
        <Card className="rounded-3">
          <Card.Img
            variant="top"
            src="https://placecats.com/800/300"
            className="object-fit-cover cover-propic"
          />
          <div className="position-relative">
            <div className="position-absolute start-0 translate-middle-y ms-3">
              <Card.Img
                src={profileData.image}
                className="rounded-circle border border-5 border-white object-fit-cover"
                style={{ width: 150, height: 150 }}
              />
            </div>
          </div>
          <Card.Body className="profile-card">
            <Card.Title>
              {profileData.name} {profileData.surname}
            </Card.Title>
            <Card.Subtitle>@{profileData.username}</Card.Subtitle>
            <Card.Text>{profileData.area}</Card.Text>
            <Card.Text>{profileData.title}</Card.Text>
            <Card.Text>{profileData.bio}</Card.Text>
            <Row>
              <Col>
                <Button variant="primary" className="rounded-pill me-1">
                  Disponibile per
                </Button>
                <Button variant="outline-primary" className="rounded-pill m-1">
                  Aggiungi sezione
                </Button>
                <Button variant="outline-primary" className="rounded-pill m-1">
                  Migliora profilo
                </Button>
                <Button
                  variant="outline-primary"
                  className="rounded-circle ms-1"
                >
                  ...
                </Button>
              </Col>
            </Row>

            <Row></Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default HeaderProfile;
