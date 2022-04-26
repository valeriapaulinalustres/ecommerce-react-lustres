
import React from 'react';
//para poder usar context trae estas dos importaciones:
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
//firebase
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.js";
//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  //trae cosas desde el context
  const { clear, compra, totalCompra, usuario, cargarCarritoDeLocalStorage } = useContext(CartContext);
  //estado del código de la compra del usuario
  const [idventa, setIdventa] = useState(0);

  document.addEventListener('DOMContentLoaded', () => {
    //saca del storage, pasa de string a array y muestra por consola:
  
    cargarCarritoDeLocalStorage()
  })


  //useEffect(() => {
  const handleFinalizarCompra = () => {
    if (usuario.nombre) {
      const ventaCollection = collection(db, "ventas")
      console.log(ventaCollection);
      addDoc(ventaCollection, {
        comprador: usuario,
        items: compra,
        date: serverTimestamp(),
        total: suma,

      }).then((result) => {
        //lleva al estado el código de la compra
        setIdventa(result.id);
       
        //toastify

  toast(`Su código de compra es ${result.id}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });



      });

      compra.forEach(element => {
        const idElementInCompra = element.id;
        //marca cuál es el producto de ItemCollection que tiene el id igual al elemento del cart
        const orderDoc = doc(db, "ItemCollection", idElementInCompra);
        //lo llama y lo trae
        getDoc(orderDoc)
          //devuelve una promesa
          .then((result) => {
            //trae esa data
            const product = result.data();
            //da la data selecciono sólo el stock
            const stockItem = product.stock;
            console.log(stockItem)
            //resto el stock de la cantidad comprada
            const newStock = stockItem - element.cantidad;
            console.log(newStock);
            //actualizo el stock
            updateDoc(orderDoc, { stock: newStock });
          })
      });
      clear();
    }
    //finalizarCompra()
    //console.log("click");
    //}, [])
    else {
      toastLogin()
    }
  }

  //evento que dispara la acción de vaciar el carrito
  const handleReset = () => {
    clear()
    //console.log("clear")
  }

  //calcula total de la compra
  let suma = 0;
  const total1 = () => {
    suma = 0;
    let subtotal = 0;

    compra.forEach(element => {
      subtotal = element.cantidad * element.precio;
      // console.log(subtotal)
      suma = suma + subtotal;
    });
    return suma;
  }
  total1()

  //toastify
  const toastLogin = () => {
    toast('Para poder realizar la compra, debe registrase haciendo click en "Login"', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

}


  return (
    <Container>
      <h2>Bienvenido al carrito de compras</h2>
      {compra.length === 0
        ? (<>
          <h4>Su carrito está vacío</h4>
          <NavLink to="/">
            <button className="button">Comenzar a comprar</button>
          </NavLink>
        </>)
        : (<>
          <ContainerTotalVaciar>
            <h3>Total: $ {suma}</h3>
            <button onClick={handleReset} className="button">Vaciar carrito</button>
          </ContainerTotalVaciar>
          <div className=' card-container'>
            {compra.map((item, index) => (
              <CartItems key={index} title={item.nombre} price={item.precio} quantity={item.cantidad} id={item.id} pictureUrl={item.imagen} />
            ))}
          </div>
          <button className='button' onClick={handleFinalizarCompra}>Finalizar compra</button>
        </>
        )
      }
    </Container>
  )
}

export default Cart

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{margin: 15px;}
h4{
  color: var(--verdeClaro);
  text-align: center;
}

`;
const ContainerTotalVaciar = styled.div`
width: 70%;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

