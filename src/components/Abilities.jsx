import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap-v5'
import bootstrap from '../img/bootstrap.png'
import sass from '../img/sass1.png'
import mcbook from '../img/mcbook.png'
const H4 = styled.h4`
    font-family: 'Press Start 2P', cursive;
    margin-top: 7rem;
`
const Section = styled.section`
    color: white;
    @media (min-width: 900px){
        .hola ,.progress{
        margin-bottom: 20px;
        height: 30px;
        font-size: 20px;
        }
        .imgGif {
            width: 80%;
            margin-left: 3rem;
        }
        .php{
            width: 50%;
            background-color: #787CB5;
        }
        .prog{
            margin-top: 120px;
        }
        .tec{
            margin-left:5px;
            width: 100px;
        }
    } 
    @media (max-width: 900px){
        .hola,.progress{
        margin-bottom: 20px;
        height: 30px;
        font-size: 20px;
        }
        .php{
            width: 50%;
            background-color: #787CB5;
        }
        .prog{
            margin-top: 50px;
        }
        .tec{
            width: 70px;
        }
        img{
            width: 100%;
        }
    }   
`
export default function Abilities() {
    return (
        <Section id="habilidades">
            <H4 className="text-center">Habilidades</H4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="prog">
                            <ProgressBar className="hola"  variant="danger" now={95} label={` HTML ${95}% `}/>
                            <ProgressBar className="hola"  variant="primary" now={83} label={` CSS ${83}% `}/>
                            <ProgressBar className="hola"  variant="warning" now={60} label={`JAVACRIPT ${60}% `}/>
                            <ProgressBar className="hola"  variant="info" now={30} label={`REACT JS ${30}%`}/>  
                            <div className="progress">
                                <div className="progress-bar php" role="progressbar">PHP 25%</div>
                            </div>
                            <img src={bootstrap} alt="" className="tec"/>
                            <img src={sass} alt="" className="tec"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={mcbook} alt="" className="imgGif"/>
                    </div>
                </div>
            </div>
        </Section>
    )
}
