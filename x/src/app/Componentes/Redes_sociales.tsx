import React from 'react'
import '../Assets/redes.css'

export const Redes_sociales = () => {
    return (
        <div>
        <img className="logo" src="/a/insta.png" alt="Logo-Instagram"/>
        <a href="https://www.instagram.com/artexltda/?hl=es" target="_blank"> Instagram</a>
        

        <br />

        <img className="logo" src="/a/face.png"  alt="Logo-Whatsapp"/>
        <a href="https://www.facebook.com/artex.copiapo/?locale=es_LA" target="_blank">  FACEBOOK </a>

        <br/>

        <img className="logo" src="/a/twi.png" alt="Logo twitter"/>
        <a href="https://twitter.com/artexdeportes" target="_blank"> Twitter</a>
        </div>

    )
}