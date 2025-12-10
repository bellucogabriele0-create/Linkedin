import { Container, Col, Row } from "react-bootstrap";
// import Competenze from "./Competenze";
// import Formazione from "./Formazione";
// import HeaderProfile from "./HeaderProfile";
// import AnalisiAttivita from "./AnalisiAttivita";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/actions";
import { useEffect } from "react";
// import Esperienze from "./Esperienze";
import Paggiungi from "./Paggiungi";
import Pamici from "./Pamici";
import Ppost from "./Ppost";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
const Phome = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <LeftSidebar />
        </Col>
        <Col xs={12} md={6}>
          <Paggiungi />
          <p>
            ---------------------------------------------------- seleziona la
            visualizzazione del feed
            <strong className=""> Più rilevanti per prima ▼ </strong>
          </p>
          <Pamici />
          <Ppost />
        </Col>
        <Col xs={12} md={3}>
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Phome;
