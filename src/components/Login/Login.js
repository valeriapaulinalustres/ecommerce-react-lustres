import React, { useRef } from 'react';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './login.css' 


function Login() {

  //trae cosas desde el context
  const { login } = useContext(CartContext);
  //referencias de los inputs
  const valueName = useRef();
  const valueTel = useRef();
  const valueEmail = useRef();

  const handleLogin = (event) => {
    event.preventDefault()
    login(valueName.current.value, valueTel.current.value, valueEmail.current.value)
  };
  return (
    <form className='form'>
      <input type="text" placeholder='Nombre y apellido' ref={valueName} className="form-input"/>
      <input type="text" placeholder='Teléfono' ref={valueTel} className="form-input"/>
      <input type="email" placeholder='email' ref={valueEmail} className="form-input"/>
      <button type="submit" onClick={handleLogin} className="button form-button">Login</button>
    </form>
  )
}

export default Login