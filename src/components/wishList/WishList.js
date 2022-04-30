import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import WishContext from '../../context/WishContext';
import CartContext from '../../context/CartContext';
import WishItems from '../wishItems/WishItems';
import './wishList.css';

function WishList() {

  const { wishItems, cargarDeseosDeLocalStorage, clearWishes } = useContext(WishContext);
  const { cargarCarritoDeLocalStorage } = useContext(CartContext);

  document.addEventListener('DOMContentLoaded', () => {
    cargarCarritoDeLocalStorage();
    cargarDeseosDeLocalStorage()
  })

  const handleVaciar = () => {
    clearWishes()
  }

  return (
    <div className='wish-container'>
      <h2>Bienvenido a la lista de deseos</h2>
      {wishItems.length === 0
        ? (
          <div className='wish-container'>
            <h3>La lista de deseos está vacía</h3>
            <NavLink to="/">
              <button className="button">Ver productos</button>
            </NavLink>
          </div>
        ) : (
          <div className='wish-container'>
            <button className='button' onClick={handleVaciar}>Vaciar</button>
            <div className=' card-container'>
              {wishItems.map((item, index) => (
                <WishItems key={index} title={item.nombre} price={item.precio} id={item.id} pictureUrl={item.imagen} />
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default WishList