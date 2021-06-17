import React from 'react'
import styled from 'styled-components'
import rocket from '../img/pngwing.com.png'
const Section = styled.section`
    color: white;
    margin-top:5rem;
    @media(min-width: 990px){
        img{
            margin-left: 8rem;
            margin-top: 6rem;
        }
    }
    @media(max-width: 990px){
        img{
            margin-left: 4rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
    img{
        width: 60%;  
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
                        <img src={rocket} alt="" srcset="" />
                    </div>
                    <div className="col-lg-6 pres">
                        <h2>Hola mi nombre es <Span>Dario Aguirre</Span>, tengo 18 años , soy un estudiante 
                        y entusiasta de la programacion! Me considero una persona proactiva y muy buena trabajando en grupos. </h2>
                    </div>
                </div>
            </div>
        </Section>
    )
}
