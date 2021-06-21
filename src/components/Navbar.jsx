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
    @media(max-width: 900px){
      ul{
        background-color: rgba(0, 0, 0, 0.71) !important;
        border-radius: 15px;
        a{
          margin-left: 15px;
          color: white !important;
        };
      }
      
    }
  }
`;
export default function Navbar() {
  return (
    <SectionNav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <button
            className="navbar-toggler border border-2 border-white"
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
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habilidades">
                  Habilidades
                </a>
              </li>
              
              <li className="nav-item ">
                <a className="nav-link" href="#education">
                  Educación
                </a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </SectionNav>
  );
}
