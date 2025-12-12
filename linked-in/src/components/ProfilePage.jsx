import { Container, Col, Row } from "react-bootstrap";
import Competenze from "./Competenze";
import Formazione from "./Formazione";
import HeaderProfile from "./HeaderProfile";
import AnalisiAttivita from "./AnalisiAttivita";
import Esperienze from "./Esperienze";
import ProfileSidebar from "./ProfileSidebar";
import { useDispatch } from "react-redux";
import { getProfile, getProfileExperiences } from "../redux/actions";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const location = useLocation();
  // const loggedUser = useSelector((state) => state.profile.content._id);

  const viewingMyProfile = location.pathname === "/ProfilePage" || !userId;

  useEffect(() => {
    dispatch(getProfile(userId || "me"));
  }, [dispatch, userId]);

  const loggedUserId = useSelector((state) => state.profile.content?._id);

  useEffect(() => {
    if (userId) {
      dispatch(getProfileExperiences(userId));
    } else if (loggedUserId) {
      dispatch(getProfileExperiences(loggedUserId));
    }
  }, [dispatch, userId, loggedUserId]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          <HeaderProfile />
          <AnalisiAttivita viewingMyProfile={viewingMyProfile} />
          <Esperienze viewingMyProfile={viewingMyProfile} userId={userId} />
          {viewingMyProfile && <Formazione />}
          {viewingMyProfile && <Competenze />}
        </Col>
        <Col xs={12} md={3}>
          <ProfileSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
