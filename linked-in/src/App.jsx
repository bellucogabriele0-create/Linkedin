import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkedInNavBar from "./components/LinkedInNavBar";
import ProfilePage from "./components/ProfilePage";
import Phome from "./PROVAG/Phome";
import "font-awesome/css/font-awesome.min.css";
import LeftSidebar from "./components/LeftSidebar";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* NAV */}
        <LinkedInNavBar />
        <Routes>
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/" element={<Phome />} />
        </Routes>
        {/* FOOTER */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
