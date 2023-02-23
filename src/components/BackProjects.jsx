import React from 'react';
import { useSelector } from 'react-redux';


const BackProjects = () => {

  const swich = useSelector(state => state.swich);

  return (
    <div className='git-container'>
      <div className='back-icon-container' style={{color:`${swich? "#f5f5f7":"#313132"}`}}>
        <i className="fa-brands fa-github"></i>
        <p>Github Projects</p>
      </div>
      <div className="back-list-container">
        <ul>
          <li><a href="https://github.com/LeoDavila1994/e-comerce_backend" target="_blank">- E-COMERCE API:</a></li>
          <li><p style={{color:`${swich? "#f5f5f7":"#313132"}`}}>Esta API puede crear usuarios, iniciar sesion, encriptar contraseñas, crear productos, categorias del producto, puede mostrar todos los productos o por categoria, puede agregar productos al carrito, comprar el carrito.</p></li>
          <li><a href="https://github.com/LeoDavila1994/Meals-App" target="_blank">- MEALS API:</a></li>
          <li><p style={{color:`${swich? "#f5f5f7":"#313132"}`}}>Esta API puede crear usuarios, iniciar sesion, encriptar contraseñas, crear restaurantes, las diferentes comidas que puede tener cada restaurante, ver las ordenes que cada usuario ha hecho para cualquier restaurante, agregar productos al carrito y comprar el carrito.</p></li>
          <li><a href="https://github.com/LeoDeveloper1994/Tasks-CRUD" target="_blank">- TASKS API:</a></li>
          <li><p style={{color:`${swich? "#f5f5f7":"#313132"}`}}>En esta API podemos crear usuarios, iniciar sesion, se encripta la contraseña, podemos crear tareas como usuarios, darles un status, listar las tareas.</p></li>
          <li><a href="https://github.com/LeoDavila1994/registrations-app" target="_blank">- REGISTRATIONS API:</a></li>
          <li><p style={{color:`${swich? "#f5f5f7":"#313132"}`}}>En esta API podemos llevar un registro de entradas y salidas como lo que hace un checador de asistencia por ejemplo y clasificar segun el horario.</p></li>
        </ul>
      </div>
    </div>
  )
}

export default BackProjects
