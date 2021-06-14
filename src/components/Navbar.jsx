import React from "react";
import styled from "styled-components";

const SectionNav = styled.section`
  font-size: 25px;
  nav {
    background-color: transparent !important;
    font-weight: bold;
    @media (min-width: 900px) {
      ul {
        background-color: black;
        border-radius: 35px;
        a {
          color: white !important;
        }
        li:hover {
          background: white;
          border-radius: 20px;
          a {
            color: black !important;
          }
        }
      }
    }
  }
`;
export default function Navbar() {
  return (
    <SectionNav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#sobremi"
                >
                  Sobre mi
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#education">
                  Educación
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habilidades">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactame">
                  Contactame!
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </SectionNav>
  );
}
