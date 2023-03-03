import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 "> */}
              <Link className="navbar-brand fw-folder fs-4 mx-8  " to="/">
                <img  className="logo"src="LIMAT.png" alt="LIMAT TECH COURSES" />LIMAT TECH SOLUTIONS
              </Link>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5 mx-2 ">
              <li className="nav-item">
                <Link className="nav-link active fs-8  my-2 mx-2" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-8  my-2 mx-2" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-8  my-2 mx-2" to="/services">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active fs-8  my-2 mx-2" to="/client">
                  Clients
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active fs-8  my-2 mx-2" to="/project">
                  Projects
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active fs-8  my-2 mx-2" to="/contact">
                  Contact
                </Link>
              </li>
              
            </ul>

            <Link className="nav-link active fs-8 px-3 my-2 mx-3 text-white" to="/admin">
                  Admin
                </Link>

          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;