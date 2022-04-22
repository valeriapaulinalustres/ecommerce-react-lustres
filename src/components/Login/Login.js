import React, { useRef } from 'react';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../../context/CartContext';



function Login() {

     //trae cosas desde el context
     const { login } = useContext(CartContext);

    const valueName = useRef();
    const valueEmail = useRef();

  const handleLogin = (event) => {
     event.preventDefault()
    login(valueName.current.value, valueEmail.current.value)
  };
  return (
    <form >
        <input type="text" placeholder='Nombre y apellido' ref={valueName}/>
        <input type="email" placeholder='email' ref={valueEmail}/>
        <button type="submit" onClick={handleLogin} className="button">Login</button>
    </form>
  )
}

export default Login