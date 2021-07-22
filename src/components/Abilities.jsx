import React from "react";
import styled from "styled-components";
import mcbook from "../img/mcbook.png";

import HTML from "../img/logos/html.svg";
import CSS from "../img/logos/css-3.svg";
import JS from "../img/logos/Unofficial_JavaScript_logo_2.svg";
import REACT from "../img/logos/react-2.svg";
import SASS from "../img/logos/sass-1.svg";
import BOOTSTRAP from "../img/bootstrap.png";
import FIREBASE from "../img/logos/logo-logomark.png";
import REDUX from '../img/logos/redux.svg'
const H4 = styled.h4`
	font-family: "Press Start 2P", cursive;
	margin-top: 7rem;
`;
const Section = styled.section`
	color: white;
	@media (min-width: 900px) {
		.imgGif {
			width: 80%;
			margin-left: 6rem;
		}

		.prog {
			margin-top: 12rem;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
		.tec {
			margin-left: 5px;
			width: 5.5rem;
		}
        .firebase{
            width: 4rem;
            margin-left:5px;
        }

		.skills-details {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
	@media (max-width: 900px) {
		.skills-details {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: flex-end;
		}
		.imgGif {
			display: none;
		}

		.prog {
			margin-top: 50px;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
		}
		.tec {
			width: 5.5rem;
		}
        .firebase{
            width: 4rem;
        }
	}
`;
export default function Abilities() {
	return (
		<Section id="habilidades">
			<H4 className="text-center">Tecnologias</H4>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="prog">
							<div className="skills-details">
								<img src={HTML} alt="" className="tec" />
								<p className="">HTML</p>
							</div>
							<div className="skills-details">
								<img src={CSS} alt="" className="tec" />
								<p>CSS</p>
							</div>

							<div className="skills-details">
								<img src={JS} alt="" className="tec" />
								<p>Javascript</p>
							</div>
							<div className="skills-details">
								<img src={REACT} alt="" className="tec" />
								<p>React</p>
							</div>
							<div className="skills-details">
								<img src={BOOTSTRAP} alt="" className="tec" />
								<p>Bootstrap</p>
							</div>
							<div className="skills-details">
								<img src={SASS} alt="" className="tec" />
								<p>Sass</p>
							</div>
							<div className="skills-details">
								<img src={FIREBASE} alt="" className="firebase"  />
								<p>Firebase</p>
							</div>
							<div className="skills-details">
								<img src={REDUX} alt="" className="tec"  />
								<p>Redux</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<img src={mcbook} alt="" className="imgGif" />
					</div>
				</div>
			</div>
		</Section>
	);
}
