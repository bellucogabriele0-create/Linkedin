import { Container, Col, Row } from "react-bootstrap";
import Competenze from "./Competenze";
import Formazione from "./Formazione";
import HeaderProfile from "./HeaderProfile";
import AnalisiAttivita from "./AnalisiAttivita";
import Esperienze from "./Esperienze";

const ProfilePage = function () {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          {/* HEADERPROFILE */}
          <HeaderProfile />
          <AnalisiAttivita />
          <Esperienze />
          <Formazione />
          <Competenze />
        </Col>
        <Col xs={12} md={3}>
          {/* ASIDE con Lingua del Profilo Potrebbero interessarti etc.  */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
