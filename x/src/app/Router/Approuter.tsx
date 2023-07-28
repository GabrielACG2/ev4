'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros'
import { Quienes_somos } from '../Componentes/Quienes_somos'
import { Productos } from '../Componentes/Productos'
import { Ubicacion } from '../Componentes/Ubicacion'
import { Componente2 } from '../Componentes/Componente2'
import { Redes_sociales } from '../Componentes/Redes_sociales'
import { Actualizar } from '../Componentes/Actualizar'
import { Eliminar } from '../Componentes/Eliminar'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Formulario" element={<Formulario/>}/>
        <Route path="/Registros" element={<Registros/>}/>
        <Route path="/quienes_somos" element={<Quienes_somos/>}/>
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/Ubicacion" element={<Ubicacion/>}/>
        <Route path="/Redes_sociales" element={<Redes_sociales/>}/>
        <Route path="/Actualizar/:idPersona" element={<Actualizar/>}/>
        <Route path="/Eliminar/:idPersona"element={<Eliminar/>}/>

    </Routes>
  )
}