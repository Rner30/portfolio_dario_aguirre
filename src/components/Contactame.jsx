import React from 'react'
import styled from 'styled-components'
import yo from '../img/yo.jpg'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
const Section = styled.section`
    .yo{
        width: 300px;
        height: 400px;
        border-radius: 50%
        
    }
    img{
        width: 40%;
    }
    @media (min-width: 900px){
        .yo{
            margin-left: 180px;
        }
        .linkedin{
        margin-left: 50px;
        }
        .col-lg-6{
            margin-left: 350px;
        }
    }
    .redes{
        margin-top:30px;
        padding-bottom: 20px;
    }
`
const H2 = styled.h2`
    font-family: Comic Sans MS;
    font-weight:bold;
    margin-top: 6rem;
`
export default function Contactame() {
    return (
        <Section id="contactame">
            <H2 className="text-center">Contactame</H2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="https://github.com/Rner30" target="_blank"><img src={github} alt="" /></a>   
                        <a href="https://www.linkedin.com/in/aguirre-dario-4ba043203/" target="_blank"><img src={linkedin} alt="" className="linkedin"/></a>
                    </div>
                </div>
            </div>
        </Section>
    )
}
