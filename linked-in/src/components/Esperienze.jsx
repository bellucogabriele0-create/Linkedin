import React from "react";
import { Card, Button } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";

const Esperienze = () => {
  return (
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
            >
              <i className="bi bi-plus fs-4"></i>
            </Button>

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

        <div className="d-flex align-items-start mt-3">
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
              <img></img>
            </span>
          </div>

          <div>
            <h6
              className="mb-0"
              style={{ fontWeight: "600", fontSize: "16px" }}
            >
              Studente diplomato
            </h6>
            <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              Vessuvio J
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Esperienze;
