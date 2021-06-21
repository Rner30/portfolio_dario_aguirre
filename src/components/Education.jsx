import React from "react";
import styled from "styled-components";
import coderLogo from "../img/coderhouse-logo.png";
import aprender from '../img/education.png'

const Section = styled.section`
  color: white;
  @media (min-width: 900px) {
    .imgGif {
      width: 35rem;
      
    }
    .coder {
      width: 35%;
    }
    .education {
      margin-top: 50px;
      
    }
  }
  @media (max-width: 900px) {
    .imgGif {
      width: 100%;
    }
    .coder {
      width: 40%;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
const H4 = styled.h4`
  font-family: 'Press Start 2P', cursive;
  margin-top: 4rem;
`;
export default function Education() {
  return (
    <Section id="education">
      <H4 className="text-center">Educacion</H4>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="imgGif"
              src={aprender}
              alt=""
              srcset=""
            />
          </div>
          <div className="col-lg-6 education">
            <a href="#!">
              <img src={coderLogo} alt="" className="coder" />
              <h3>Desarrollo web - HTML, CSS, BOOTSTRAP, SASS</h3>
            </a>
            <a href="#!">
              <img src={coderLogo} alt="" className="coder" />
              <h3>Javascript - DOM, Eventos,POO, Jquery, Ajax</h3>
            </a>

            <a href="#!">
              <img src={coderLogo} alt="" className="coder" />
              <h3>
                React JS - JSX, Componentes, API's, Eventos, Context, Firebase
              </h3>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
