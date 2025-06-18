import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <ul className="list-head">
        <li className="list-item">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/accounts">
            Accounts
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/coders">
            Coder
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/resources">
            Resources
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/Problems">
            Problems
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
