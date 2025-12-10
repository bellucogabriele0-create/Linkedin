export default function LeftSidebar() {
  return (
    <div className="d-flex flex-column gap-2">
      {/* --- CARD PROFILO --- */}
      <div className="card border-0 shadow-sm">
        <div
          className="w-100"
          style={{
            height: "60px",
            background:
              "linear-gradient(135deg, #bcd0e7 0%, #d3e0ef 50%, #e6eef7 100%)",
          }}
        ></div>

        <div className="card-body text-center">
          <img
            src="https://via.placeholder.com/80"
            className="rounded-circle border border-2 border-white mb-2 mt-n5"
            alt="avatar"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />

          <h6 className="fw-bold mb-0">Lorenzo Di Lorenzo</h6>

          <p className="text-muted small mb-1">Receptionist</p>

          <p className="text-muted small mb-3">Bologna, Emilia Romagna</p>

          {/* Bottone Esperienza */}
          <button className="btn btn-outline-secondary w-100 py-1 d-flex align-items-center justify-content-center gap-1">
            <i className="bi bi-plus-lg"></i> Esperienza
          </button>
        </div>
      </div>

      {/* --- CARD COLLEGAMENTI --- */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className="fw-semibold small">Collegamenti</span>
            <span className="text-primary small">12</span>
          </div>
          <p className="text-muted small mb-0">Espandi la tua rete</p>
        </div>
      </div>

      {/* --- CARD PREMIUM --- */}
      <div className="card border-0 shadow-sm">
        <div className="card-body small">
          <p className="fw-semibold mb-1">
            Fai crescere la tua carriera con Premium
          </p>

          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-square-fill text-warning"></i>
            <span>
              <strong>Da non perdere:</strong> Premium per 0 EUR
            </span>
          </div>
        </div>
      </div>

      {/* ---  MENU --- */}
      <div className="card border-0 shadow-sm">
        <div className="list-group list-group-flush small">
          <button className="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <i className="bi bi-bookmark"></i> Elementi salvati
          </button>

          <button className="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <i className="bi bi-people"></i> Gruppi
          </button>

          <button className="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <i className="bi bi-envelope"></i> Newsletter
          </button>

          <button className="list-group-item list-group-item-action d-flex align-items-center gap-2">
            <i className="bi bi-calendar-event"></i> Eventi
          </button>
        </div>
      </div>
    </div>
  );
}
