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
          <Link className="link" to="/codeforces">
            CodeForces
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/leet_code">
            Leetcode
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/at_coder">
            AtCoder
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/code_chef">
            CodeChef
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/hacker_rank">
            HackerRank
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/kick_start">
            KickStart
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/QrCode">
            QR code
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/PassWord">
            Password Generator
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
