import { Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getProfileExperiences } from "../redux/actions";

const ExperienceForm = function ({ experienceId, close }) {
  const [exp, setExp] = useState({
    _id: "",
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const dispatch = useDispatch();

  const userID = "6937e390d322f500151076b9";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZTM5MGQzMjJmNTAwMTUxMDc2YjkiLCJpYXQiOjE3NjUyOTA2NTQsImV4cCI6MTc2NjUwMDI1NH0.VJvGSSmDcPbUfZIrUmeBRIuPb4Zj0J41kYkWAJBR4pc";

  const sendExp = function () {
    const isEditing = !!experienceId;
    const finalEndpoint = isEditing
      ? `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${experienceId}`
      : `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`;
    const method = isEditing ? "PUT" : "POST";
    const successMessage = isEditing
      ? "Esperienza aggiornata correttamente!"
      : "Esperienza salvata correttamente!";
    const expToSend = {
      role: exp.role,
      company: exp.company,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description,
      area: exp.area,
    };

    fetch(finalEndpoint, {
      method: method,
      body: JSON.stringify(expToSend),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => {
        if (r.ok) {
          alert(successMessage);
          dispatch(getProfileExperiences());
          if (close) close();
        } else {
          throw new Error("Errore nella response " + r.status);
        }
      })
      .catch((err) => {
        console.log("Errore", err);
        alert("Errore nel salvataggio dell'esperienza");
      });
  };

  const deleteExp = function () {
    if (!experienceId) return;

    if (!window.confirm("Sei sicuro di voler eliminare questa esperienza?")) {
      return;
    }

    const finalEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${experienceId}`;

    fetch(finalEndpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => {
        if (r.ok) {
          alert("Esperienza eliminata correttamente!");
          dispatch(getProfileExperiences());
          if (close) close();
        } else {
          throw new Error("Errore nell'eliminazione " + r.status);
        }
      })
      .catch((err) => {
        console.log("Errore", err);
        alert("Errore nell'eliminazione dell'esperienza");
      });
  };

  const getExp = useCallback(
    function (experienceId) {
      const finalEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${experienceId}`;

      fetch(finalEndpoint, { headers: { Authorization: `Bearer ${token}` } })
        .then((r) => {
          if (r.ok) return r.json();
          else throw new Error("Errore nel recupero esperienza " + r.status);
        })
        .then((data) => {
          console.log("Data ricevuta:", data);
          setExp({
            _id: data._id || "",
            role: data.role || "",
            company: data.company || "",
            startDate: data.startDate ? data.startDate.slice(0, 10) : "",
            endDate: data.endDate ? data.endDate.slice(0, 10) : "",
            description: data.description || "",
            area: data.area || "",
          });
        })
        .catch((err) => {
          console.error("Errore completo:", err);
          alert("Errore nel caricamento dell'esperienza");
        });
    },
    [userID, token]
  );

  useEffect(() => {
    if (experienceId) {
      getExp(experienceId);
    }
  }, [experienceId, getExp]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendExp();
      }}
    >
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Titolo*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Titolo esperienza"
          value={exp.role}
          onChange={(e) => {
            setExp({
              ...exp,
              role: e.target.value,
            });
          }}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCompany">
        <Form.Label>Azienda o organizzazione*</Form.Label>
        <Form.Control
          type="text"
          placeholder="esempio: Microsoft"
          value={exp.company}
          onChange={(e) => {
            setExp({
              ...exp,
              company: e.target.value,
            });
          }}
          required
        />
      </Form.Group>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formStartDate">
          <Form.Label>Inserisci data d'inizio</Form.Label>
          <Form.Control
            type="date"
            value={exp.startDate}
            onChange={(e) => {
              setExp({
                ...exp,
                startDate: e.target.value,
              });
            }}
            required
          />
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formEndDate">
          <Form.Label>Inserisci data fine</Form.Label>
          <Form.Control
            type="date"
            value={exp.endDate}
            onChange={(e) => {
              setExp({
                ...exp,
                endDate: e.target.value,
              });
            }}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formArea">
        <Form.Label>Località</Form.Label>
        <Form.Control
          type="text"
          placeholder="esempio: Milano"
          value={exp.area}
          onChange={(e) => {
            setExp({
              ...exp,
              area: e.target.value,
            });
          }}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Descrivi le tue mansioni"
          value={exp.description}
          onChange={(e) => {
            setExp({
              ...exp,
              description: e.target.value,
            });
          }}
          required
        />
      </Form.Group>

      {experienceId && (
        <Button
          variant="danger"
          className="me-2"
          type="button"
          onClick={deleteExp}
        >
          Elimina
        </Button>
      )}
      <Button variant="primary" type="submit">
        {experienceId ? "Salva Modifiche" : "Salva"}
      </Button>
    </Form>
  );
};

export default ExperienceForm;
