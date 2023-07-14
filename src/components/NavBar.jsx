import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div id="brand">
          <a className="brand" href="#a">
            MARHBA
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#a">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="#a">
              Features
            </a>
            <a className="nav-item nav-link active" href="#a">
              Pricing
            </a>
            <a className="nav-item nav-link active" href="#a">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
