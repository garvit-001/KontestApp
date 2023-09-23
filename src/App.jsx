import "./App.css";
import Nav from "./Nav";
import Contests from "./Contests";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import "./Nav.css";
import QrCode from "./QrCode/QrCode";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Contests key="all" name={"all"} />} />
          <Route
            exact
            path="/leet_code"
            element={<Contests key="leet_code" name={"leet_code"} />}
          />
          <Route
            exact
            path="/codeforces"
            element={<Contests key="codeforces" name={"codeforces"} />}
          />
          <Route
            exact
            path="/at_coder"
            element={<Contests key="at_coder" name={"at_coder"} />}
          />
          <Route
            exact
            path="/code_chef"
            element={<Contests key="code_chef" name={"code_chef"} />}
          />
          <Route
            exact
            path="/hacker_rank"
            element={<Contests key="hacker_rank" name={"hacker_rank"} />}
          />
          <Route
            exact
            path="/kick_start"
            element={<Contests key="kick_start" name={"kick_start"} />}
          />
          <Route exact path="/QrCode" element={<QrCode />} />
          <Route exact path="/PassWord" element={<PasswordGenerator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
