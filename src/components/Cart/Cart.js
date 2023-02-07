
import React from 'react';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WishContext from '../../context/WishContext';

function Cart() {
  const { clear, compra, usuario, cargarCarritoDeLocalStorage } = useContext(CartContext);
  const { cargarDeseosDeLocalStorage } = useContext(WishContext)
  const [idventa, setIdventa] = useState(0);

  document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoDeLocalStorage();
    cargarDeseosDeLocalStorage()
  })
   
  
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
        setIdventa(result.id);
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
        const orderDoc = doc(db, "ItemCollection", idElementInCompra);
        getDoc(orderDoc)
          .then((result) => {
            const product = result.data();
            const stockItem = product.stock;
            console.log(stockItem)
            const newStock = stockItem - element.cantidad;
            console.log(newStock);
            updateDoc(orderDoc, { stock: newStock });
          })
      });
      clear();
    }
    else {
      toastLogin()
    }
  }

  const handleReset = () => {
    clear()
  }

  let suma = 0;
  const total1 = () => {
    suma = 0;
    let subtotal = 0;
    compra.forEach(element => {
      subtotal = element.cantidad * element.precio;
      suma = suma + subtotal;
    });
    return suma;
  }
  total1()

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

  let saleResume = "Buenos días, quisiera comprar: " + compra.map(el=>
    "%20" + el.nombre + "%20unidades:%20" + el.cantidad   
     ).toString() + ". Total: $ " + suma

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
          <a href={`https://wa.me/5491160127926/?text=${saleResume}`} target="_blank"
class="icono-contacto">
          <button className='button' onClick={handleFinalizarCompra}>Finalizar compra</button>
          </a>
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

 
