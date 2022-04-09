
import React from 'react';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartItems from './CartItems';


function Cart() {

  //trae cosas desde el context
  const { clear, compra } = useContext(CartContext);

  //evento que dispara la acción de vaciar el carrito
  const handleReset = () => {
    clear()
    //console.log("clear")
  }

  return (
    <div>
      <h2>Bienvenido al carrito de compras</h2>
      <button onClick={handleReset}>Vaciar carrito</button>
      <div className=' card-container'>
        {compra.map((item, index) => (
          <CartItems key={index} title={item.nombre} price={item.precio} quantity={item.cantidad} id={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Cart