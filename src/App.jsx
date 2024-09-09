import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/pages/Table";
import Profile from "./components/pages/Profile";
// import EditExpert from "./components/Experts/EditExpert";
// import AddExpert from "./components/Experts/AddExpert";
import { Provider } from "react-redux";
import store from "./redux/store";
// import GlobalAlert from "./Alert/GlobalAlert";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <GlobalAlert /> */}
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/profile/:expertId" element={<Profile />} />
          {/* <Route path="/add-expert" element={<AddExpert />} />
          <Route path="/edit-expert/:expertId" element={<EditExpert />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
