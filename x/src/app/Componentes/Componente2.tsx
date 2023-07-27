import React from 'react'
interface Props{
    nombre?:string
    apellido?:string
}

export const Componente2 = (props:Props) => {
  return (
    <div className="componente1-fondo">
        <p>hola {props.nombre} {props.apellido}</p>
        <p>chao {props.nombre}</p>
    </div>
  )
}