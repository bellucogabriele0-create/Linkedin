import { Navbar, Nav, Container } from "react-bootstrap";

export default function LinkedInNavBar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm px-3 linkedin-nav">
      <Container>
        <Navbar.Brand href="/">
          <i className="bi bi-linkedin linkedin-logo"></i>
        </Navbar.Brand>

        <div className="search-container d-none d-lg-flex">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Cerca" />
        </div>

        <Nav className="ms-auto align-items-center nav-icons">
          <div className="icon-item">
            <i className="bi bi-house-door"></i>
            <span className="d-none d-lg-block">Home</span>
          </div>

          <div className="icon-item">
            <i className="bi bi-people"></i>
            <span className="d-none d-lg-block">Rete</span>
          </div>

          <div className="icon-item">
            <i className="bi bi-briefcase"></i>
            <span className="d-none d-lg-block">Lavoro</span>
          </div>

          <div className="icon-item position-relative">
            <i className="bi bi-chat-dots"></i>
            <span className="notification-badge">2</span>
            <span className="d-none d-lg-block">Messaggi</span>
          </div>

          <div className="icon-item position-relative">
            <i className="bi bi-bell"></i>
            <span className="notification-badge">13</span>
            <span className="d-none d-lg-block">Notifiche</span>
          </div>

          <div className="profile-item">
            <div className="profile-circle">K</div>
            <span className="d-none d-lg-block">Tu</span>
          </div>

          <div className="icon-item">
            <i className="bi bi-grid-3x3-gap-fill"></i>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
