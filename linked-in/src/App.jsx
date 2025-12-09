import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* NAV */}
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
        {/* FOOTER */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
