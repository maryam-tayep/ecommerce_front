import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer
        className="text-light py-4 mt-5"
        style={{ backgroundColor: " #200357" }}
      >
        <div className="container text-light">
          <div className="row">
            <div className="col-md-3 mb-4">
              <span className="logo-footer">E-commerce</span>
              <p className="footer-desc">
                Kinetic precision electronics. Redefining the future.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h4 className="text-light">Ecommerce links</h4>
              <ul className="footer-links">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
                <NavLink className="nav-link" to="/Products">
                  Products
                </NavLink>
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
                <NavLink className="nav-link" to="/Cart">
                  Cart
                </NavLink>
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </ul>
            </div>
            
            
          </div>
          <div className="copyright">
            <p className="mb-2 mb-md-0 text-center">
              &copy; {new Date().getFullYear()} E-COMMERCE Store Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
