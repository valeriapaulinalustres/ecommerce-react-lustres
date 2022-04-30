import React from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import './CartItems.css';


function CartItems({ title, price, pictureUrl, quantity, id }) {

  const { removeItem } = useContext(CartContext);

  const handleDeleteItem = (e) => {
    let id = e.target.id;
    removeItem(id)
  }

  return (
    <div className="card text-center card-carrito-size">
      <img src={pictureUrl} className="card-img-top img-carrito" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">${price}</p>
        <p className="card-text">Cantidad: {quantity}</p>
        <p className="card-text">Subtotal: $ {quantity * price}</p>
        <button className='button x' onClick={handleDeleteItem} id={id}>X</button>
      </div>
    </div>
  )
}

export default CartItems


