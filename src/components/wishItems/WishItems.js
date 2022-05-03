import React from 'react';
import { useContext } from 'react';
import WishContext from '../../context/WishContext'
import { NavLink } from 'react-router-dom';

function WishItems({ title, price, id, pictureUrl }) {

  const { removeItem } = useContext(WishContext);

  const handleDeleteItem = (e) => {
    let id = e.target.id
    removeItem(id)
  }

  return (
    <div className="card text-center card-deseos-size">
      <img src={pictureUrl} className="card-img-top img-carrito" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">${price}</p>
        <button className='button x' onClick={handleDeleteItem} id={id}>X</button>
        <NavLink to={'/item/' + id}>
          <button className='button' onClick={handleDeleteItem} id={id}>🛒</button>
        </NavLink>
      </div>
    </div>
  )
}

export default WishItems