import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-primary">React 19</span> Features
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/docs/form-action' ? 'active' : ''}`}
                to="/docs/form-action"
              >
                Form Actions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/docs/transition' ? 'active' : ''}`}
                to="/docs/transition"
              >
                Transition
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/docs/use-hook' ? 'active' : ''}`}
                to="/docs/use-hook"
              >
                Use Hook
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/docs/optimistic' ? 'active' : ''}`}
                to="/docs/optimistic"
              >
                Optimistic
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/docs/meta-data' ? 'active' : ''}`}
                to="/docs/meta-data"
              >
                Meta Data
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <span className="text-white-50 small me-3">
              Created by <strong className="text-white">Codex Safwan</strong>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
