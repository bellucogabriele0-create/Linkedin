import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export default function LinkedInNavBar() {
  const profile = useSelector((state) => state.profile.content);
  const navigate = useNavigate();
  const location = useLocation();
  const initial = profile?.name?.charAt(0).toUpperCase() || "U";

  return (
    <>
      {/* MOBILE TOP NAV */}
      <Navbar
        bg="white"
        expand="lg"
        className="d-lg-none"
        style={{
          padding: "8px 12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <div
            onClick={() => navigate("/ProfilePage")}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "#e2e2e2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "600",
            }}
          >
            {profile?.image ? (
              <img
                src={profile.image}
                alt="profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              initial
            )}
          </div>
          <Form
            style={{
              flexGrow: 1,
              marginLeft: 15,
              marginRight: 15,
              position: "relative",
            }}
          >
            <i
              className="bi bi-search"
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
              }}
            ></i>

            <FormControl
              type="search"
              placeholder="Cerca"
              style={{
                paddingLeft: 32,
                borderRadius: 6,
                fontSize: 14,
                backgroundColor: "#eef3f8",
              }}
            />
          </Form>
          <div style={{ position: "relative" }}>
            <i className="bi bi-chat-dots" style={{ fontSize: 22 }}></i>
            <span
              style={{
                position: "absolute",
                top: -4,
                right: -6,
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "1px 5px",
                fontSize: 10,
              }}
            >
              1
            </span>
          </div>
        </Container>
      </Navbar>

      {/* DESKTOP NAVBAR */}
      <Navbar
        bg="white"
        expand="lg"
        className="d-none d-lg-flex"
        style={{
          padding: "4px 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <i
              className="bi bi-linkedin"
              style={{ fontSize: 38, color: "#0a66c2" }}
            ></i>
          </Navbar.Brand>

          {/* Search Box */}
          <Form
            style={{
              position: "relative",
              width: 260,
              marginRight: 40,
            }}
          >
            <i
              className="bi bi-search"
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
              }}
            ></i>

            <FormControl
              type="search"
              placeholder="Cerca"
              style={{
                paddingLeft: 32,
                borderRadius: 6,
                backgroundColor: "#eef3f8",
              }}
            />
          </Form>
          <Nav className="ms-auto d-flex align-items-center">
            {[
              {
                icon:
                  location.pathname === "/"
                    ? "bi-house-door-fill"
                    : "bi-house-door",
                label: "Home",
                route: "/",
              },
              { icon: "bi-people", label: "La mia rete" },
              { icon: "bi-briefcase", label: "Lavoro" },
              {
                icon: "bi-chat-dots",
                label: "Messaggistica",
                badge: 2,
              },
              {
                icon: "bi-bell",
                label: "Notifiche",
                badge: 13,
              },
            ].map((item, idx) => (
              <div
                onClick={() => item.route && navigate(item.route)}
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 12px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <i className={`bi ${item.icon}`} style={{ fontSize: 22 }}></i>

                {item.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: -4,
                      right: -6,
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "1px 5px",
                      fontSize: 10,
                    }}
                  >
                    {item.badge}
                  </span>
                )}

                <span style={{ fontSize: 12 }}>{item.label}</span>
              </div>
            ))}
            <div
              onClick={() => navigate("/ProfilePage")}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 12px",
                cursor: "pointer",
              }}
            >
              {profile?.image ? (
                <img
                  src={profile.image}
                  alt="profile"
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    backgroundColor: "#ddd",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {initial}
                </div>
              )}
              <span style={{ fontSize: 12 }}>Tu</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 12px",
                cursor: "pointer",
              }}
            >
              <i
                className="bi bi-grid-3x3-gap-fill"
                style={{ fontSize: 22 }}
              ></i>
              <span style={{ fontSize: 12 }}>Per le aziende</span>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* MOBILE BOTTOM NAV */}
      <div
        className="d-lg-none"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          borderTop: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-around",
          padding: "6px 0",
          zIndex: 10,
        }}
      >
        {[
          {
            icon:
              location.pathname === "/"
                ? "bi-house-door-fill"
                : "bi-house-door",
            label: "Home",
            route: "/",
          },
          { icon: "bi-people", label: "Rete" },
          { icon: "bi-plus-circle-fill", label: "Pubblica" },
          { icon: "bi-bell", label: "Notifiche" },
          { icon: "bi-briefcase", label: "Lavoro" },
        ].map((item, idx) => (
          <div
            onClick={() => item.route && navigate(item.route)}
            key={idx}
            style={{
              textAlign: "center",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            <i className={`bi ${item.icon}`} style={{ fontSize: 22 }}></i>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
