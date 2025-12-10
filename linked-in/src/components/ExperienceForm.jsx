import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

const ExperienceForm = function () {
  //   const currentYear = new Date().getFullYear();
  //   const years = Array.from({ length: 80 }, (_, i) => currentYear - i);
  const [exp, setExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "", // può essere null
    description: "",
    area: "",
  });
  const sendExp = function () {
    const endpoint = "https://striveschool-api.herokuapp.com/api/profile/";
    let userID = "6937e390d322f500151076b9";
    const finalEndpoint = endpoint + userID + "/experiences";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZTM5MGQzMjJmNTAwMTUxMDc2YjkiLCJpYXQiOjE3NjUyOTA2NTQsImV4cCI6MTc2NjUwMDI1NH0.VJvGSSmDcPbUfZIrUmeBRIuPb4Zj0J41kYkWAJBR4pc";
    fetch(finalEndpoint, {
      method: "POST",
      body: JSON.stringify(exp),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => {
        if (r.ok) {
          alert("Esperienza salvata correttamente!");
          setExp({
            role: "",
            company: "",
            startDate: "",
            endDate: "", // può essere null
            description: "",
            area: "",
          });
        } else {
          throw new Error("Errore nella response " + r.status);
        }
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
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
      <Form.Group className="mb-3">
        <Form.Label>Tipo di impiego</Form.Label>
        <Form.Select>
          <option>Tempo pieno</option>
          <option>Part-time</option>
          <option>Autonomo</option>
          <option>Freelance</option>
          <option>A contratto</option>
          <option>Stage</option>
          <option>Apprendistato</option>
          <option>Stagionale</option>
        </Form.Select>
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
      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check type="checkbox" label="Attualmente ricopro questo ruolo" />
      </Form.Group>
      {/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formMonth">
          <Form.Label>Mese</Form.Label>
          <Form.Select defaultValue="Month">
            <option>Month</option>
            <option>Gennaio</option>
            <option>Febbraio</option>
            <option>Marzo</option>
            <option>Aprile</option>
            <option>Maggio</option>
            <option>Giugno</option>
            <option>Luglio</option>
            <option>Agosto</option>
            <option>Settembre</option>
            <option>Ottobre</option>
            <option>Novembre</option>
            <option>Dicembre</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formYear">
          <Form.Label>Anno</Form.Label>
          <Form.Select defaultValue="Year">
            <option>Year</option>
            {years.map((y) => {
              <option>{y}</option>;
            })}
          </Form.Select>
        </Form.Group>
      </Row> */}
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
      <Button variant="transparent">Elimina</Button>
      <Button variant="primary" type="submit">
        Salva
      </Button>
    </Form>
  );
};

export default ExperienceForm;
