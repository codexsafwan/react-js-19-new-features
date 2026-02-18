import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Menu } from 'lucide-react';

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/docs/form-action', label: 'Form Actions' },
    { path: '/docs/transition', label: 'Transition' },
    { path: '/docs/use-hook', label: 'Use Hook' },
    { path: '/docs/optimistic', label: 'Optimistic' },
    { path: '/docs/meta-data', label: 'Meta Data' },
    { path: '/docs/forward-ref', label: 'Forward Ref' },
  ];

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top bg-white z-50">
      <div className="container">
        {/* Brand / Logo */}
        <NavLink className="navbar-brand d-flex align-items-center fw-bold text-dark" to="/">
          <span className="bg-dark text-white rounded px-2 py-1 me-2 fs-6">R19</span>
          <span className="text-primary">React</span> Features
        </NavLink>

        {/* Mobile Toggle Button (Right) */}
        <button
          className="navbar-toggler border-0 shadow-none p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <Menu className="text-dark" size={28} />
        </button>

        {/* Desktop & Mobile Menu (Offcanvas) */}
        <div 
          className="offcanvas offcanvas-end" 
          tabIndex="-1" 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-bottom">
             <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
              <span className="bg-dark text-white rounded px-2 py-1 me-2 fs-6">R19</span>
              <span className="text-primary">React</span> Features
            </h5>
            <button
              type="button"
              className="btn-close shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-lg-flex justify-content-between align-items-center w-100">
            {/* Centered Navigation Links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">
              {links.map((link) => (
                <li className="nav-item" key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link px-3 rounded-pill fw-medium transition-all ${
                        isActive ? 'bg-primary text-white shadow-sm' : 'text-secondary hover-bg-light'
                      }`
                    }
                    end={link.path === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Social Icons (Right Side) */}
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 justify-content-start justify-content-lg-end border-top border-lg-0 pt-3 pt-lg-0">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary opacity-75 hover-opacity-100 transition-all"
                title="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary opacity-75 hover-opacity-100 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
