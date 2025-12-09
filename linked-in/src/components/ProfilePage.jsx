import { Container, Col, Row } from "react-bootstrap";
import HeaderProfile from "./HeaderProfile";
import AnalisiAttivita from "./AnalisiAttivita";

const ProfilePage = function () {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          <HeaderProfile />
          <AnalisiAttivita />
        </Col>
        <Col xs={12} md={3}>
          {/* ASIDE con Lingua del Profilo Potrebbero interessarti etc.  */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
