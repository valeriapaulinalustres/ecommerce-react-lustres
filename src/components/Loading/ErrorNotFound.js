import React from 'react';
import { NavLink, Link } from 'react-router-dom';


function ErrorNotFound() {
  return (
    <div className='error'>
      <h2>Error, no encontrado</h2>
      <NavLink to='/'><button className='button'>Volver al inicio</button></NavLink>
    </div>
  )
}

export default ErrorNotFound