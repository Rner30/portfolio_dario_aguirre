import React from "react";
import styled from "styled-components";
import Dario from "../img/canva-photo-editor.png";
import Redessociales from "./Redes.jsx";
import { IoLocationSharp } from "react-icons/io5";
import Typical from 'react-typical'
const Section = styled.section`
  color: white;
  margin-top: 3rem;
  .location {
    margin-top: 20px;
  }
  .typing{
    display:inline-block;
    margin: 0;
  }
  @media (min-width: 990px) {
    img {
      margin-left: 8rem;
      margin-top: 8rem;
    }
    .pres {
      margin-top: 9rem;
    }
  }
  @media (max-width: 990px) {
    img {
      margin-left: 4rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  img {
    width: 60%;
  }
`;

export default function SobreMi() {
  return (
    <Section id="sobremi">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={Dario} alt="" srcset="" />
          </div>
          <div className="col-lg-6 pres">
            <h2>
              Hola! soy <Typical steps={[2000,'Dario Aguirre']} wrapper="h2" className="typing"/>, tengo 18 años , soy
              un estudiante y entusiasta de la programacion! Me considero una
              persona proactiva y muy buena trabajando en grupos.
              
            </h2>
            <div className="location">
              <h4>
                <IoLocationSharp size="2em"  /> Buenos Aires, Argentina
              </h4>
            </div>
            <Redessociales />
          </div>
        </div>
      </div>
    </Section>
  );
}
