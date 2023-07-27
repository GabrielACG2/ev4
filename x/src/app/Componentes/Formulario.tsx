'use client'
import React, { useState } from 'react'
import { persona } from '../../../Interfaces';
import { registrarPersona } from'../Firebase/Promesas';

export const Formulario = () => {

    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [edad, setEdad] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const [contrasena, setContrasena] = useState<string>('');
    const [productos, setProductos] = useState<string>('');
    const [cantidad, setCantidad] = useState<string>('');
    const [direccion, setDireccion] = useState<string>('');
    //const [ubicacion, setUbicacion] = useState<string>('');
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
          +contrasena+" "+productos+" "+cantidad+" "+direccion+" "+ciudad+" "+telefono+" ")
          const p:persona = {
              nombre, apellido,edad,email,contrasena,productos,cantidad,direccion,ciudad
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
<input type='text' onChange={(e)=>setEmail(e.target.value)}/>
<br />

<label >Ingrese una Contraseña</label>
<input type='text' onChange={(e)=>setContrasena(e.target.value)}/>
<br />

  <p >productos</p>

<input  type="checkbox" value="" />
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
<input type='number' onChange={(e)=>setCantidad(e.target.value)}/>

<br />


<label >Talla</label>
<select id="talla" >
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

<label >Nombre</label>
<input type='text' onChange={(e)=>setNombre(e.target.value)}/>
<br />


<label >Apellido</label>
<input type='text' onChange={(e)=>setApellido(e.target.value)}/>
<br />


<label>Direccion</label>
<input type='textarea' onChange={(e)=>setDireccion(e.target.value)}/>
<br />


<input type="tel" id="telefono" placeholder="Telefono"onChange={(e)=>setTelefono(e.target.value)}/>
<br />
<label >Ciudad</label>
<input type='select' onChange={(e)=>setCiudad(e.target.value)}/>
<select id="ciudad">
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