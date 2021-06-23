import React from "react";
import Proyects from "./proyects/Proyects";
import styled from "styled-components";
import tienda from "../img/tiendaFrutas.png";
import dw from "../img/dwCoder.png";
import tiempo from "../img/tiempo.png";
import pizzeria from '../img/pizzeria_moderna-min.png'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
const Section = styled.section`
  color: white;
`;
const H4 = styled.h4`
  font-family: "Press Start 2P", cursive;
  margin-top: 4rem;
`;

export default function Proyectos() {
  return (
    <Section id="proyectos">
      <H4 className="text-center">Proyectos</H4>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Proyects
              imagen={dw}
              alt="Proyecto web"
              github="https://github.com/Rner30/Proyecto_desarrollo_web"
              website="https://dario-pf-dw-coderhouse.netlify.app/"
              info="HTML,CSS,Bootstrap"
              iconos={[
                <IoLogoHtml5 color="#FF3E2A" size="2.5rem" />,
                <IoLogoCss3 color="#1f75fe" size="2.5rem" />,
                <BsBootstrapFill color="#BA00FF" size="2.5rem" />,
              ]}
            />
          </div>
          <div className="col-lg-6">
            <Proyects
              imagen={tienda}
              alt="Tienda javascript vanilla"
              github="https://github.com/Rner30/carrito_de_compras_coder"
              website="https://rner30.github.io/carrito_de_compras_coder/"
              info="JS,HTML,CSS,Bootstrap"
              iconos={[
                <IoLogoJavascript color="yellow" size="2.5rem" />,
                <IoLogoHtml5 color="#FF3E2A" size="2.5rem" />,
                <IoLogoCss3 color="#1f75fe" size="2.5rem" />,
                <BsBootstrapFill color="#BA00FF" size="2.5rem" />,
              ]}
            />
          </div>
          <div className="col-lg-6">
            <Proyects
              imagen={tiempo}
              alt="App tiempo"
              github="https://github.com/Rner30/Wheater_diff"
              website="https://wheaterdiff.netlify.app/"
              info="JS,HTML,CSS"
              iconos={[
                <IoLogoJavascript color="yellow" size="2.5rem" />,
                <IoLogoHtml5 color="#FF3E2A" size="2.5rem" />,
                <IoLogoCss3 color="#1f75fe" size="2.5rem" />,
              ]}
            />
          </div>
          <div className="col-lg-6">
            <Proyects
              imagen={pizzeria}
              alt="Pizzeria"
              github="https://github.com/Rner30/Pizzeria_Moderna"
              website="https://relaxed-pasteur-2d8da8.netlify.app/"
              info="CSS,React"
              iconos={[
                <IoLogoCss3 color="#1f75fe" size="2.5rem" />,
                <IoLogoReact color="#03a9f4" size="2.5rem"/>
              ]}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
