import React from "react";
import Logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent mt-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item me-5">
              <a className="nav-link" href="#">
                Discount
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
