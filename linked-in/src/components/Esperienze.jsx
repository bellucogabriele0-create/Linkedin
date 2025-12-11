import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileExperiences } from "../redux/actions";

const Esperienze = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experienceIdToEdit, setExperienceIdToEdit] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileExperiences());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const expData = useSelector((currentState) => {
    return currentState.profile.experiences;
  });

  const openModal = (expId = null) => {
    setExperienceIdToEdit(expId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setExperienceIdToEdit(null);
  };

  console.log(expData);

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 style={{ fontWeight: "600", fontSize: "20px", margin: 0 }}>
              Esperienza
            </h5>

            <div>
              <Button
                variant="link"
                className="p-0 me-2"
                style={{
                  border: "none",
                  background: "none",
                  color: "black",
                }}
                onClick={() => openModal()}
              >
                <i className="bi bi-plus fs-4"></i>
              </Button>
              {isModalOpen && (
                <ExperienceModal
                  close={closeModal}
                  espid={experienceIdToEdit}
                />
              )}

              <Button
                variant="link"
                className="p-0"
                style={{
                  border: "none",
                  background: "none",
                  color: "black",
                }}
              >
                <i className="bi bi-pencil-fill fs-5 p-2"></i>
              </Button>
            </div>
          </div>
          <Row>
            {expData.map((exp) => {
              return (
                <div
                  className="d-flex align-items-start mt-3"
                  key={exp._id}
                  onClick={() => openModal(exp._id)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      marginRight: "12px",
                      backgroundColor: "#eef3f8",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>
                      <img
                        src="https://placecats.com/50/50"
                        alt="Company logo"
                      />
                    </span>
                  </div>
                  <Col sm={12}>
                    <h6
                      className="mb-0"
                      style={{ fontWeight: "600", fontSize: "16px" }}
                    >
                      {exp.role}
                    </h6>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      {exp.company}
                    </p>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      dal {exp.startDate ? exp.startDate.slice(0, 10) : "N/A"}
                      {exp.endDate
                        ? ` al ${exp.endDate.slice(0, 10)}`
                        : " - In corso"}
                    </p>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      {exp.area}
                    </p>
                    <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                      {exp.description}
                    </p>
                  </Col>
                </div>
              );
            })}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Esperienze;
