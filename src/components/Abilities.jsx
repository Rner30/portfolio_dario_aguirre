import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap-v5'
import bootstrap from '../img/bootstrap.png'
import sass from '../img/sass1.png'
const H2 = styled.h2`
    font-family: Comic Sans MS;
    font-weight:bold;
    margin-top: 7rem;
`
const Section = styled.section`
    @media (min-width: 900px){
        .hola{
        margin-bottom: 20px;
        height: 30px;
        font-size: 20px;
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
        .hola{
        margin-bottom: 20px;
        height: 30px;
        font-size: 20px;
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
            <H2 className="text-center">Habilidades</H2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="prog">
                            <ProgressBar className="hola"  variant="danger" now={95} label={` HTML ${95}% `}/>
                            <ProgressBar className="hola"  variant="primary" now={83} label={` CSS ${83}% `}/>
                            <ProgressBar className="hola"  variant="warning" now={60} label={`JAVACRIPT ${60}% `}/>
                            <ProgressBar className="hola"  variant="info" now={30} label={`REACT JS ${30}%`}/>  
                            <img src={bootstrap} alt="" className="tec"/>
                            <img src={sass} alt="" className="tec"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://i.pinimg.com/originals/cd/59/d6/cd59d626dc86397fe45080e6e9c7027d.gif" alt="" />
                    </div>
                </div>
            </div>
        </Section>
    )
}
