import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          React 19 Docs
        </NavLink>

        {/* Toggler / Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            {/* Docs Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="docsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Docs
              </a>
              <ul className="dropdown-menu" aria-labelledby="docsDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/docs/getting-started">
                    Getting Started
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/docs/form-action">
                    Form Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/docs/server-table">
                    Server Table
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light">Login</button>
            <button className="btn btn-light">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
