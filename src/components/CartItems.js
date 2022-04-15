import React from 'react';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import './CartItems.css';


function CartItems({ title, price, pictureUrl, quantity, id }) {

  //trae cosas desde el context
  const { removeItem } = useContext(CartContext);

  //evento que dispara la acción de borrar un item
  const handleDeleteItem = (e) => {
    //console.log("remove");
    let id = e.target.id
    //console.log(id)
    removeItem(id)
  }

  return (
    <div className="card text-center card-carrito-size">
     <img src={pictureUrl} className="card-img-top img-carrito" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">${price}</p>
        <p className="card-text">Cantidad: {quantity}</p>
        <button className='button' onClick={handleDeleteItem} id={id}>X</button>
      </div>
    </div>
  )
}

export default CartItems


