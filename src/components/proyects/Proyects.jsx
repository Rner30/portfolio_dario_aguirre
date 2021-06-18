import React from 'react'
import { Fragment } from 'react'
import estilos from './Proyectos.module.css'
import { IoLogoGithub,  IoCodeSlash} from "react-icons/io5";

export default function Proyects({imagen,alt,github,website,info,iconos}) {
    return (
        <Fragment>
            <div class={estilos.contenedor}>
                <img src={imagen} className={estilos.imagen} alt={alt}/>
                <div className={estilos.overlay}>
                    <div className={estilos.text}>
                        <h4>{alt}</h4>
                        <p>{iconos}</p>
                        <p>{info}</p>  
                        <a href={github} className={estilos.github} target="blank"><IoLogoGithub className={estilos.logo}/>Repositorio</a>
                        <a href={website} className={estilos.website} target="blank"><IoCodeSlash className={estilos.logo}/>Website</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
