import React from "react";
import styled from "styled-components";
import { IoLogoLinkedin, IoLogoGithub, IoMailOpen} from "react-icons/io5";

const Section = styled.section`
  color: white;
  @media (min-width: 992px) {
    .redes {
      margin-left: 38%;
    }
  }
`;
const H2 = styled.h2`
  font-family: Comic Sans MS;
  font-weight: bold;
  margin-top: 6rem;
`;
export default function Contactame() {
  return (
    <Section id="contactame">
      <H2 className="text-center">Contactame</H2>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 redes">
            <a
              href="https://www.linkedin.com/in/aguirre-dario-4ba043203/"
              target="blank"
            >
              <IoLogoLinkedin color="#0e76a8" size="100px" />
            </a>
            <a href="https://github.com/Rner30" target="blank">
              <IoLogoGithub size="100px" color="black" />
            </a>
            <a href="mailto:rner0015@gmail.com" target="blank">
              <IoMailOpen size="100px" color="#E1306C" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
