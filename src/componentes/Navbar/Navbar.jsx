import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import perro from "../../assets/perro.jpg";
import "./NavBar.css";

const NavBar = () => {
  const img = <img className="img-prof" src={perro} />;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Home
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/myhome">
                  Inicio
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/myhome/calculadora">
                  Calculadora
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse ml-auto navbar-collapse justify-content-end">
            <li className="dropdown navbar-light bg-dark">
              <DropdownButton title={img}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
