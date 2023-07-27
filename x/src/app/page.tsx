'use client'
import { AppRouter } from "./Router/Approuter";
import { Componente2 } from "./Componentes/Componente2";
//import { Footer } from "./componentes/Footer";
//import { Formulario } from "./Componentes/Formulario";
import { Header } from "./Componentes/Header";
import { BrowserRouter } from 'react-router-dom';
import { Quienes_somos } from "./Componentes/Quienes_somos";
import { Productos } from "./Componentes/Productos";
import { Ubicacion } from "./Componentes/Ubicacion";
import { Redes_sociales } from "./Componentes/Redes_sociales";
import React from "react";
export default function Home() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <AppRouter/>
    </BrowserRouter>
    </>
  )
}
