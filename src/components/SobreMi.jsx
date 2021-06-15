import React from 'react'
import styled from 'styled-components'
const Section = styled.section`
    margin-top:5rem;
    img{
        width: 90%;
    }
    @media (min-width: 900px){
        .pres{
            margin-top: 200px;
        }
    }
    
`
const Span = styled.span`
    font-family: Comic Sans MS;
    
`
export default function SobreMi() {
    return (
        <Section id="sobremi">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://normat.com.pe/img/otros/trabajando.gif" alt="" srcset="" />
                    </div>
                    <div className="col-lg-6 pres">
                        <h2>Hola mi nombre es <Span>Dario</Span>, tengo 18 años y soy un estudiante 
                        y entusiasta de la programacion! Me considero una persona proactiva y muy buena trabajando en grupos. </h2>
                    </div>
                </div>
            </div>
        </Section>
    )
}
