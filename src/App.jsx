import "./App.css";
import Nav from "./Nav";
import Contests from "./components/Contests";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import "./Nav.css";
import AccountList from "./components/AccountList";
import CoderList from "./components/CoderList";
import CoderDetails from "./components/Coderetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Contests key="all" name={"all"} />} />
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/coders" element={<CoderList />} />
          <Route path="/coders/:id" element={<CoderDetails />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
