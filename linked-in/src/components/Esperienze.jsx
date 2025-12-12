import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import { useSelector } from "react-redux";

const Esperienze = ({ viewingMyProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [experienceIdToEdit, setExperienceIdToEdit] = useState(null);

  const expData = useSelector((state) => state.profile.experiences);

  const openModal = (expId = null) => {
    if (!viewingMyProfile) return;
    setExperienceIdToEdit(expId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setExperienceIdToEdit(null);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 style={{ fontWeight: "600", fontSize: "20px", margin: 0 }}>
            Esperienza
          </h5>

          {viewingMyProfile && (
            <Button variant="link" className="p-0" onClick={() => openModal()}>
              <i className="bi bi-plus fs-4"></i>
            </Button>
          )}
        </div>

        <Row>
          {expData.length === 0 ? (
            <div>
              <p className="mt-3 fs-5 fw-medium m-0">Nessuna Esperienza</p>
              <p className="mt-1">Le esperienze condivise appariranno qui</p>
            </div>
          ) : (
            expData.map((exp) => (
              <div
                className="d-flex align-items-start mt-3"
                key={exp._id}
                onClick={
                  viewingMyProfile ? () => openModal(exp._id) : undefined
                }
                style={{ cursor: viewingMyProfile ? "pointer" : "default" }}
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
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="../public/image.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>

                <Col>
                  <h6 className="mb-0 fw-bold">{exp.role}</h6>
                  <p className="text-muted mb-0">{exp.company}</p>
                  <p className="text-muted mb-0">
                    dal {exp.startDate?.slice(0, 10) || "N/A"}{" "}
                    {exp.endDate
                      ? ` al ${exp.endDate.slice(0, 10)}`
                      : " - In corso"}
                  </p>
                  <p className="text-muted mb-0">{exp.area}</p>
                  <p className="text-muted mb-0">{exp.description}</p>
                </Col>
              </div>
            ))
          )}
        </Row>

        {viewingMyProfile && isModalOpen && (
          <ExperienceModal close={closeModal} espid={experienceIdToEdit} />
        )}
      </Card.Body>
    </Card>
  );
};

export default Esperienze;
