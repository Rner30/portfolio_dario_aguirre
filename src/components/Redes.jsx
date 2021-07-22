import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoMailOpen } from "react-icons/io5";
import styled from "styled-components";
const Redes = styled.div`
    margin-top: 1rem;
    a{
        margin: 0.5rem;
    }
`;
export default function Redessociales() {
  return (
    <Redes>
      <a
        href="https://www.linkedin.com/in/dario-aguirre/"
        target="blank"
        title="Linkedin"
      >
        <IoLogoLinkedin color="#00a0dc" size="4rem" />
      </a>
      <a href="https://github.com/Rner30" target="blank" title="Github">
        <IoLogoGithub size="4rem" color="black" />
      </a>
      <a href="mailto:rner0015@gmail.com" target="blank" title="Enviame un correo">
        <IoMailOpen size="4rem" color="#E1306C" />
      </a>
    </Redes>
  );
}
