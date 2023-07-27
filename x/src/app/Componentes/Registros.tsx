import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { persona } from '../../../Interfaces'
import { Link } from 'react-router-dom'




export const Registros = () => {
    const [personas, setPersonas] =useState<persona[]>([])
    
    const renderizarDatos =()=>{
        var elementos = personas.map((p)=>{
            return<tr>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
                <td>{p.email}</td>
                <td>{p.contrasena}</td>
                <td>{p.productos}</td>
                <td>{p.cantidad}</td>
                <td>{p.direccion}</td>
                <td>{p.ciudad}</td>
                <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                <td><Link to={"/eliminar/"+p.idPersona}>Eliminar</Link></td>
            </tr>
        })
        return elementos
    }
    useEffect(()=>{
        //cargar datos firebase
        obtenerPersonas().then((listado)=>{
        console.log("cargando listado")
        console.log(listado)
        setPersonas(listado)
        })
    },[])

  return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Contrasena</th>
            <th>Productos</th>
            <th>Cantidad</th>
            <th>Direccion</th>
            <th>Ciudad</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
