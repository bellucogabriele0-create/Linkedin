import { Container, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getProfile } from "../redux/actions";
import { useEffect } from "react";
import Paggiungi from "./Paggiungi";
import Pamici from "./Pamici";
import Ppost from "./Ppost";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";

const Phome = function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  });

  return (
    <Container>
      <Row>
        <Col lg={3} className="d-none d-lg-block">
          <LeftSidebar />
        </Col>

        <Col xs={12} lg={6}>
          <Paggiungi />
          <p>
            ---------------------------------------------------- seleziona la
            visualizzazione del feed
            <strong className=""> Più rilevanti per prima ▼ </strong>
          </p>
          <Pamici />
          <Ppost />
        </Col>

        <Col lg={3} className="d-none d-lg-block">
          <RightSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Phome;
