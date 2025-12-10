export default function RightSidebar() {
  const newsItems = [
    {
      id: 1,
      title: "La cucina italiana è patrimonio Unesco",
      time: "50 minuti fa",
      readers: null,
    },
    {
      id: 2,
      title: "Netflix compra Warner Bros.",
      time: "1 giorno fa",
      readers: "1.823 lettori",
    },
    {
      id: 3,
      title: "In malattia con la televisita",
      time: "1 giorno fa",
      readers: "270 lettori",
    },
    {
      id: 4,
      title: "Mediaset acquisisce Radio Norba",
      time: "1 giorno fa",
      readers: "326 lettori",
    },
    {
      id: 5,
      title: "La Bei finanzia Scalapay",
      time: "4 ore fa",
      readers: "112 lettori",
    },
    {
      id: 6,
      title: "Antidoti al capo Narciso",
      time: "1 giorno fa",
      readers: "13.259 lettori",
    },
  ];

  return (
    <div className="d-flex flex-column gap-2">
      {/* --- CARD: LINKEDIN NOTIZIE --- */}
      <div className="card border-0 shadow-sm">
        <div className="card-body pb-2">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="card-title mb-0 fw-bold">LinkedIn Notizie</h6>
            <span className="text-muted small">
              <i className="bi bi-info-circle"></i>
            </span>
          </div>

          <p className="text-muted mb-1 small">Storie principali</p>

          <ul className="list-unstyled mb-2">
            {newsItems.map((item) => (
              <li key={item.id} className="mb-2">
                <div className="fw-semibold small">{item.title}</div>
                <div className="text-muted small">
                  {item.time}
                  {item.readers && ` • ${item.readers}`}
                </div>
              </li>
            ))}
          </ul>

          <button className="btn btn-link p-0 small text-decoration-none">
            Mostra altro
          </button>
        </div>

        <hr className="my-0" />
        <div className="card-body">
          <h6 className="fw-bold small mb-2">Rompicapo di LinkedIn</h6>

          <div className="d-flex align-items-start">
            <div className="me-2">
              <div
                className="border rounded d-flex align-items-center justify-content-center"
                style={{ width: "56px", height: "56px" }}
              >
                <span role="img" aria-label="puzzle">
                  🧩
                </span>
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="fw-semibold small mb-1">
                Zip - un rompicapo veloce
              </div>
              <div className="text-muted small mb-1">
                Risolvilo in 60 secondi o meno!
              </div>
              <div className="text-muted small d-flex align-items-center">
                <i className="bi bi-eye-slash me-1"></i>
                <span>Solo tu puoi vedere il punteggio</span>
              </div>
            </div>

            <button className="btn btn-link p-0 ms-2">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <img
          src="https://placecats.com/400/200"
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body d-flex align-items-center py-2">
          <span className="badge bg-warning text-dark me-2 small mb-0">
            SUGGERIMENTO
          </span>
          <span className="small">Prova LinkedIn sull’app per Windows</span>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center text-center small text-muted mt-1">
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Informazioni
        </a>
        <span className="mx-1">·</span>
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Accessibilità
        </a>
        <span className="w-100" />
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Centro assistenza
        </a>
        <span className="mx-1">·</span>
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Privacy e condizioni
        </a>
        <span className="w-100" />
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Opzioni per gli annunci pubblicitari
        </a>
        <span className="w-100" />
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Pubblicità
        </a>
        <span className="mx-1">·</span>
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Servizi alle aziende
        </a>
        <span className="w-100" />
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Scarica l’app LinkedIn
        </a>
        <span className="mx-1">·</span>
        <a href="#!" className="text-muted text-decoration-none mx-1 mb-1">
          Altro
        </a>
      </div>

      <div className="text-center small mt-2">
        <span className="text-primary fw-bold me-1">LinkedIn</span>
        <span className="text-muted">LinkedIn Corporation © 2025</span>
      </div>
    </div>
  );
}
