'use client'
import React, { useState } from 'react'
import { persona } from '../../../Interfaces';
import { registrarPersona } from'../Firebase/Promesas';
import '../Assets/formulario.css'

export const Formulario = () => {

    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [edad, setEdad] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const [contrasena, setContrasena] = useState<string>('');
    const [productos, setProductos] = useState<string>('');
    const [talla, setTalla] = useState<string>('');
    const [cantidad, setCantidad] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [ciudad, setCiudad] = useState<string>('');

    const [errorEdad, setErrorEdad] = useState("")

    //para validar un nombre, se tendria que recorrer nombre para verificar si tiene valor
    const registrar = () => {
      if (edad>0){
        console.log("Nombre:",nombre)
        console.log("Apellido:",apellido)
        console.log("Edad:",edad)
        console.log("Email:",email)
        alert("Bienvenido " + nombre + " " + apellido + " " + "Edad: " + edad+ + email+" "
        +contrasena+" "+productos+" "+cantidad+" "+direccion+" "+ciudad+" "+telefono+" "+talla+" ")
        const p:persona = {
            nombre,apellido,edad,email,contrasena,productos,cantidad,direccion,ciudad,talla,telefono,
        }

        registrarPersona(p)
      }

      else{
        setErrorEdad("La edad debe ser positiva")
      }
  }
    return(
      
        
//Formulario
    <form>
        <h1>Ordena un pedido</h1>

<label>Email</label>
<input type='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
<br />

<label >Ingrese una Contraseña</label>
<input type='text' onChange={(e)=>setContrasena(e.target.value)}value={contrasena}/>
<br />

  <p >productos</p>

<input  type="checkbox"/>
<label >
  polera
</label>
<br />


<input  type="checkbox" value="" />
<label>
  Short
</label>
<br />



<label >Cantidad</label>
<input type="number" onChange={(e)=>setCantidad(e.target.value)}value={cantidad}/>


<br />


<label >Talla</label>
<select onChange={(e)=>setTalla(e.target.value)} value={talla} >
  <option >4</option>
  <option >6</option>
  <option >8</option>
  <option >10</option>
  <option >12</option>
  <option >14</option>
  <option >16</option>
  <option >XS</option>
  <option >S</option>
  <option >M</option>
  <option >L</option>
  <option >XL</option>
  <option >XXL</option>
  <option selected>...</option>
</select>
<br />
<label >Nombre</label>
<input type='text' onChange={(e)=>setNombre(e.target.value)}value={nombre}/>
<br />


<label >Apellido</label>
<input type='text' onChange={(e)=>setApellido(e.target.value)}value={apellido}/>
<br />
<label>Edad: </label>
        <input type="number" 
          onChange={(e)=>setEdad(parseInt(e.target.value))}
          value={edad}
        />
        <span>{errorEdad}</span>
        <br />

<label>Direccion</label>
<input type='textarea' onChange={(e)=>setDireccion(e.target.value)}value={direccion}/>
<br />

<label>Telefono</label>
<input type="tel" onChange={(e)=>setTelefono(e.target.value)}value={telefono}/>
<br />
<label >Ciudad</label>
<select onChange={(e)=>setCiudad(e.target.value)} value={ciudad} >
<option >Copiapo</option>
<option >Vallenar</option>
<option >Antofagasta</option>
<option >Santiago</option>
<option >Serena</option>
<option >Coquimbo</option>
<option >Valparaiso</option>
<option >Viña del mar</option>
<option >Concepcion</option>
<option >Talcahuano</option>
<option selected>...</option>
</select>
<br />

<button onClick={registrar}type='button'>Registrar</button>


    </form>
    )
  }
