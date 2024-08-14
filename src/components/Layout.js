import { Outlet, Link } from "react-router-dom";
import "./styles/layout.css";
import { useState } from "react";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div class="container-fluid">
          <Link to="/" class="navbar-logo">
            <img
              class="nav-logo"
              src="inbound-logo.png"
              alt="Bootstrap"
              width="40"
              height="24"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto mb-1 mb-md-0">
              <div class="nav-item">
                <Link to="/" class="nav-link navbar-brand" aria-current="page">
                  Home
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  to="/science"
                  class="nav-link navbar-brand"
                  aria-current="page"
                >
                  Science
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  to="/engine"
                  class="nav-link navbar-brand"
                  aria-current="page"
                >
                  Engine
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  to="/career"
                  class="nav-link navbar-brand"
                  aria-current="page"
                >
                  Career
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  to="/login"
                  class="nav-link navbar-brand"
                  aria-current="page"
                >
                  Tracking
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  to="/news"
                  class="nav-link navbar-brand"
                  aria-current="page"
                >
                  News
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  to="/about"
                  class="nav-link navbar-brand"
                  aria-current="page"
                >
                  About
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  to="/contacts"
                  class="nav-link navbar-brand"
                  aria-current="page"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
