import React, { useEffect, useMemo, useState } from "react";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/";

export default function ProfileSidebar() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTNhN2UzOThkYTViODAwMTVmMjU5MGIiLCJpYXQiOjE3NjU0NDEwODEsImV4cCI6MTc2NjY1MDY4MX0.jXJiwwf2N8dqjo8Q_DtF8aKTOPknY9XCI_QU87Lv24I";

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Errore nel recupero profili");

        const data = await res.json();
        setProfiles(data);
      } catch (err) {
        console.error(err);
        setError("Errore nel caricamento profili.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [token]);

  const randomProfiles = useMemo(() => {
    if (!profiles.length) return [];
    const shuffled = [...profiles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  }, [profiles]);

  const twoProfiles = useMemo(() => {
    if (!profiles.length) return [];
    const shuffled = [...profiles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, [profiles]);

  return (
    <div className="d-flex flex-column gap-2 mt-2">
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex align-items-start mb-3">
            <i className="bi bi-pencil-fill me-2 fs-5"></i>
            <div>
              <h6 className="small fw-bold mb-1" style={{ cursor: "pointer" }}>
                Profilo pubblico e URL
              </h6>
              <span className="small text-muted">Modifica link</span>
            </div>
          </div>

          <div className="d-flex align-items-start">
            <i className="bi bi-pencil-fill me-2 fs-5"></i>
            <div>
              <h6 className="small fw-bold mb-1">
                Aggiungi un’altra lingua del profilo
              </h6>
              <span className="small text-muted">
                Gestisci le versioni multilingua
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body pb-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="me-2">
                <div
                  className="bg-success d-flex align-items-center justify-content-center rounded"
                  style={{ width: "48px", height: "48px" }}
                >
                  <i className="bi bi-calendar-event text-white"></i>
                </div>
              </div>

              <div>
                <h6 className="small fw-bold mb-1">Eventi</h6>
                <p className="small mb-1">
                  Ti potrebbe interessare seguire eventi.
                </p>
                <p className="small text-muted mb-2">
                  Rimani aggiornato sulle ultime novità del settore.
                </p>
              </div>
            </div>

            <span className="badge bg-light text-muted border small">
              Promosso
            </span>
          </div>

          <button className="btn btn-outline-primary btn-sm rounded-pill px-4 mt-2">
            Segui
          </button>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h6 className="small fw-bold mb-2">Altri profili consultati</h6>

          {loading && (
            <p className="small text-muted">Caricamento profili...</p>
          )}
          {error && <p className="small text-danger">{error}</p>}

          {!loading &&
            !error &&
            twoProfiles.map((p) => (
              <div
                key={p._id}
                className="d-flex align-items-start mb-3 pb-2 border-bottom"
              >
                <img
                  src={
                    p.image || "https://via.placeholder.com/48x48.png?text=User"
                  }
                  alt={`${p.name} ${p.surname}`}
                  className="rounded-circle me-2"
                  style={{ width: "48px", height: "48px", objectFit: "cover" }}
                />

                {/* INFO */}
                <div className="flex-grow-1">
                  <div className="small fw-semibold">
                    {p.name} {p.surname}
                  </div>
                  {p.title && <div className="small text-muted">{p.title}</div>}
                  <button className="btn btn-outline-secondary btn-sm rounded-pill px-3 mt-1">
                    Visualizza
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* --- PERSONE CHE POTRESTI CONOSCERE (5 PROFILI RANDOM) --- */}
      <div className="card border-0 shadow-sm">
        <div className="card-body pb-2">
          <h6 className="small fw-bold mb-1">Persone che potresti conoscere</h6>
          <p className="text-muted small mb-2">Dal tuo settore</p>

          {loading && (
            <p className="text-muted small">Caricamento profili...</p>
          )}
          {error && <p className="text-danger small">{error}</p>}

          {!loading &&
            !error &&
            randomProfiles.map((p) => (
              <div
                key={p._id}
                className="d-flex align-items-start mb-2 pb-2 border-bottom"
              >
                <img
                  src={
                    p.image || "https://via.placeholder.com/48x48.png?text=User"
                  }
                  alt={`${p.name} ${p.surname}`}
                  className="rounded-circle me-2"
                  style={{ width: "48px", height: "48px", objectFit: "cover" }}
                />

                <div className="flex-grow-1">
                  <div className="small fw-semibold">
                    {p.name} {p.surname}
                  </div>

                  {p.title && <div className="small text-muted">{p.title}</div>}

                  <button className="btn btn-outline-secondary btn-sm mt-1 rounded-pill px-3">
                    + Collegati
                  </button>
                </div>
              </div>
            ))}

          <button className="btn btn-link p-0 small">Mostra tutto</button>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body small">
          <div className="text-muted mb-2">Promosso</div>

          <div className="d-flex align-items-center">
            <img
              src="https://www.red-dot.org/fileadmin/_processed_/1/7/csm_16-DP02619-2023BC_accenture_logo_fd0c03a6e0.jpg"
              alt="Sponsor logo"
              className="rounded me-2"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
            />

            <div>
              <p className="mb-0 fw-semibold small">
                Esplora le nostre opportunità
              </p>
              <p className="mb-0 text-muted small">
                {" "}
                Trova il lavoro adatto a te
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body small">
          <div className="text-muted mb-2">Promosso</div>

          <div className="d-flex align-items-center">
            <img
              src="https://output.di.unisa.it/wp-content/uploads/2022/11/unnamed.png"
              alt="Sponsor logo"
              className="rounded me-2"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
            />

            <div>
              <p className="mb-0 fw-semibold small">Engineering, AI & Data</p>
              <p className="mb-0 text-muted small">
                Transform the heart of your business operations and systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
