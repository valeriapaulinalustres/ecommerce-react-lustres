
import React from 'react';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartItems from '../CartItems/CartItems';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';


function Cart() {

  //trae cosas desde el context
  const { clear, compra, totalCompra } = useContext(CartContext);

  //evento que dispara la acción de vaciar el carrito
  const handleReset = () => {
    clear()
    //console.log("clear")
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
      :(<>
        <ContainerTotalVaciar>
        <h3>Total: $ {totalCompra}</h3>
        <button onClick={handleReset} className="button">Vaciar carrito</button>
        </ContainerTotalVaciar>
        
        <div className=' card-container'>
          {compra.map((item, index) => (
            <CartItems key={index} title={item.nombre} price={item.precio} quantity={item.cantidad} id={item.id} pictureUrl = {item.imagen}/>
          ))}
        </div>
        
        </>

      )
    }
      
      
     
    </Container>
  )
}

export default Cart

const Container = styled.div `
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