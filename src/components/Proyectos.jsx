import React from 'react'
import styled from 'styled-components'
import tienda from '../img/tiendaFrutas.png'
import dw from '../img/dwCoder.png'
const Section = styled.section`
    img{
        margin-top: 50px;
        width: 100%;
    }
    img:hover{
        transition-duration: 0.5s;
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
    h3{
        margin-top: 1%;
    }
`
const H2 = styled.h2`
    font-family: Comic Sans MS;
    font-weight:bold;
    margin-top: 6rem;
`

export default function Proyectos() {
    return (
        <Section id="proyectos">
            <H2 className="text-center">Proyectos</H2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <a href="https://github.com/Rner30/Proyecto_desarrollo_web" target="_blank"><img src={dw} alt="" /></a>
                        <h3 className="text-center">Proyecto desarrollo web</h3>
                    </div>
                    <div className="col-lg-6">
                        <a href="https://github.com/Rner30/Proyecto_desarrollo_web" target="_blank"><img src={tienda} alt="" /></a>
                        <h3 className="text-center">Tienda con javascript vanilla</h3>
                    </div>
                </div>
            </div>
        </Section>
    )
}
