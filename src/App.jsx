import "./App.css";
import Nav from "./Nav";
import Contests from "./components/Contests";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import "./Nav.css";
import AccountList from "./components/AccountList";
import CoderList from "./components/CoderList";
import CoderDetails from "./components/CoderDetails";
import Resources from "./components/Resources";
import Problems from "./components/Problems";

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
          <Route path="/resources" element={<Resources />}/>
          <Route path="/problems" element={<Problems />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
