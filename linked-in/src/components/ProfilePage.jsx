import { Container, Col, Row } from "react-bootstrap";
import Competenze from "./Competenze";
import Formazione from "./Formazione";

const ProfilePage = function () {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          {/* HEADERPROFILE */}
          <Competenze />
          <Formazione />
        </Col>
        <Col xs={12} md={3}>
          {/* ASIDE con Lingua del Profilo Potrebbero interessarti etc.  */}
        </Col>
      </Row>
    </Container>
  );
};
export default ProfilePage;
