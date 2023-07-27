'use client'
import {Link} from 'react-router-dom'
import React from 'react'



export const Header = () => {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/formulario"}>Formulario</Link>
        <Link to={"/registros"}>registros</Link>
        <Link to={"/Quienes_somos"}>Quienes_somos</Link>
        <Link to={"/Productos"}>Productos</Link>
        <Link to={"/Ubicacion"}>Ubicacion</Link>
        <Link to={"/Redes_sociales"}>Redes_sociales</Link>

    </nav>
  )
}