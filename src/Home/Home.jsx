import React from 'react'
import './Home.css'
import { Menu } from '../components/Menu/Menu'
import ContenidoPrincipal from '../components/ContenidoPrincipal/ContenidoPrincipal'
import Carrusel from '../components/Carrusel/Carrusel'
import PieDePagina from '../components/PieDePagina/PieDePagina'
import Registrate from '../components/Registrate/Registrate'
import chiva from '../assets/img/chiva.png'





export function Home() {
    return (
        <>
            <header>
                <Menu></Menu>
            </header>
            <section className='banner'>
                {/* <img className='logo' src={chiva} alt="" /> */}
                <p className='text-white'>
                    <h1>Disfruta la aventura</h1>
                </p>
            </section>

            <section>
                <ContenidoPrincipal>
                </ContenidoPrincipal>
            </section>

            <section>
                <Carrusel></Carrusel>
            </section>
            <section>
               <Registrate></Registrate>
            </section>

            <section>
                <PieDePagina></PieDePagina>
            </section>

        </>
    )
}