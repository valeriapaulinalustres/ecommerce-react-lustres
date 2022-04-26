import React, { useRef } from 'react';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import './login.css';
//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

  //trae cosas desde el context
  const { login } = useContext(CartContext);
  //referencias de los inputs
  const valueName = useRef();
  const valueTel = useRef();
  const valueEmail = useRef();
  const valueEmailConfirm = useRef();

  const handleLogin = (event) => {
    event.preventDefault();

    const validName = validarName(valueName.current.value);
    if (!validName) return invalidName();

    const validEmail = validarMail(valueEmail.current.value);
    if (!validEmail) return invalidEmail();

    if (valueEmail.current.value !== valueEmailConfirm.current.value) return invalidEmailConfirm();

    login(valueName.current.value, valueTel.current.value, valueEmail.current.value);
    thanksLogin();
    console.log(valueTel.current.value)

  };

  const validarName = (nombre) => {
    if (!nombre) { invalidName() };
    if (typeof nombre !== "string") { invalidName() }
    let expReg = /^[A-Za-zÁáÉéÍíÓóÚúÑñÜú\s]+$/g.test(nombre);
    return expReg
  }

  const validarMail = (email) => {
    if (!email) { invalidEmail() };
    if (typeof email !== "string") { invalidEmail() }
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return expReg
  }

  //toastify
  const thanksLogin = () => {
    toast('Gracias por registrarse', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const invalidName = () => {
    toast('No ha ingresado un nombre válido, por favor, vuelva a intentarlo.', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const invalidEmail = () => {
    toast('No ha ingresado un email válido, por favor, vuelva a intentarlo', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const invalidEmailConfirm = () => {
    toast('La confirmación de su email no coincide', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <form className='form'>
      <input type="text" placeholder='Nombre y apellido' ref={valueName} className="form-input" />
      <input type="number" placeholder='Teléfono' ref={valueTel} className="form-input" />
      <input type="email" placeholder='email' ref={valueEmail} className="form-input" />
      <input type="email" placeholder='confirmar email' ref={valueEmailConfirm} className="form-input" />
      <button type="submit" onClick={handleLogin} className="button form-button"><NavLink to='/' className="navbar-link">Login</NavLink></button>


    </form>
  )
}

export default Login

/*

const validarNombre = (nombre="") => {
    if (!nombre) {console.error("no ingresaste un nombre")};
    if (typeof nombre !== "string") {console.error("no ingresaste cadena de texto")}


    let expReg = /^[A-Za-zÁáÉéÍíÓóÚúÑñÜú\s]+$/g.test(nombre);
    return (expReg)
    ? console.info(`el nombre ${nombre} es válido`)
    : console.warn(`${nombre} es inválido`);
}
validarNombre("Valeria")
validarNombre(87)
validarNombre()
validarNombre(89)
    
    //////////////////////20
    
    const validarMail = (email="") => {
        if (!email) {console.error("no ingresaste un mail")};
        if (typeof email !== "string") {console.error("no ingresaste mail válido")}
    
    
        let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
        return (expReg)
        ? console.info(`el email ${email} es válido`)
        : console.warn(`${email} es inválido`);
    }
    validarMail("Valeria")
    validarMail(87)
    validarMail("valeriapaulina@yahoo.com.ar")
*/