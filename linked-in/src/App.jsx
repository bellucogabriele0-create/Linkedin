import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>{/* <Route> con profile page etc */}</Routes>
        {/* FOOTER */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
