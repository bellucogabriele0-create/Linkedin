import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function LinkedInNavBar() {
  const profile = useSelector((state) => state.profile.content);
  const initial = profile?.name
    ? profile.name.charAt(0).toUpperCase()
    : "U";

  return (
    <>
    
      <div className="mobile-top-nav d-lg-none">
        <link to="/profile" className="profile-link"> 
        <div
          className={
            profile?.image ? "profile-circle-small has-image" : "profile-circle-small"
          }
        >
          {profile?.image ? (
            <img src={profile.image} alt="profile" />
          ) : (
            initial
          )}
         
        </div> </link>

        <div className="search-box-mobile">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Cerca" />
        </div>

        <div className="right-icons">
          <div className="icon-wrapper position-relative">
            <i className="bi bi-chat-dots"></i>
            <span className="badge-mobile">1</span>
          </div>
        </div>
      </div>

      <Navbar bg="white" expand="lg" className="shadow-sm px-3 linkedin-nav d-none d-lg-flex">
        <Container fluid>
          <Navbar.Brand href="/">
            <i className="bi bi-linkedin linkedin-logo"></i>
          </Navbar.Brand>

          <div className="search-container">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Cerca" />
          </div>

          <Nav className="ms-auto align-items-center nav-icons">
            <link to="/" className="icon-item">
              <i className="bi bi-house-door"></i>
              <span>Home</span>
            </link>
            <div className="icon-item">
              <i className="bi bi-people"></i>
              <span>La mia rete</span>
            </div>
            <div className="icon-item">
              <i className="bi bi-briefcase"></i>
              <span>Lavoro</span>
            </div>
            <div className="icon-item position-relative">
              <i className="bi bi-chat-dots"></i>
              <span className="notification-badge">2</span>
              <span>Messaggistica</span>
            </div>
            <div className="icon-item position-relative">
              <i className="bi bi-bell"></i>
              <span className="notification-badge">13</span>
              <span>Notifiche</span>
            </div>
            <div className="profile-item">
              <link to="/ProfilePage" className="profile-link">
              {profile?.image ? (
                <img src={profile.image} alt="profile" className="profile-img" />
              ) : (
                <div className="profile-circle">{initial}</div>
              )}
              <span>Tu</span>
              </link>
            </div>
            <div className="icon-item">
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <span>Per le aziende</span>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <div className="mobile-bottom-nav d-lg-none">
        <link to="/" className="item">
          <i className="bi bi-house-door"></i>
          <span>Home</span>
        </link>
        <div className="item">
          <i className="bi bi-people"></i>
          <span>Rete</span>
        </div>
        <div className="item publish-btn">
          <i className="bi bi-plus-circle-fill"></i>
          <span>Pubblica</span>
        </div>
        <div className="item">
          <i className="bi bi-bell"></i>
          <span>Notifiche</span>
        </div>
        <div className="item">
          <i className="bi bi-briefcase"></i>
          <span>Lavoro</span>
        </div>
      </div>
    </>
  );
}
