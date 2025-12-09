import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* NAV */}
        <Routes>{/* <Route> con profile page etc */}</Routes>
        {/* FOOTER */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
