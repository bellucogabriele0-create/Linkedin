import { Container, Col, Row } from "react-bootstrap";
import Competenze from "./Competenze";
import Formazione from "./Formazione";
import HeaderProfile from "./HeaderProfile";
import AnalisiAttivita from "./AnalisiAttivita";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/actions";
import { useEffect } from "react";
import Esperienze from "./Esperienze";
import ExperienceForm from "./ExperienceForm";

const ProfilePage = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
