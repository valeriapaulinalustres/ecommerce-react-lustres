import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [compra, setCompra] = useState([])

  const [usuario, setUsuario] = useState({});

  const updateCache = () => {
    const compraJSON = JSON.stringify(compra)
    if (compra.length !== 0) { localStorage.setItem("Compra", compraJSON) } else {localStorage.removeItem("Compra") }
  }
  updateCache();

  const login = (valueNombre, valueTel, valueEmail) => {
    console.log(valueNombre, valueTel, valueEmail);
    setUsuario({
      nombre: valueNombre,
      tel: valueTel,
      email: valueEmail
    })
  }

  const logout = () => {
    setUsuario({})
  }

  const addItem = (item, quantity) => {
    const found = compra.find(el => el.id == item.id);
    const findDuplicated = (found, compras) => {
      compras.forEach(element => {
        if (found.id === element.id) {
          return element.cantidad = quantity + element.cantidad;
        }
      });
    }
    if (found) { findDuplicated(found, compra); } else { setCompra([...compra, item]); };
    updateCache()
  }

  const removeItem = (id) => {
    const result = compra.filter(el => el.id !== id);
    setCompra(result);
    updateCache()
  }

  const clear = () => {
    setCompra([]);
    localStorage.removeItem("Compra")
  }

  const isInCart = (item) => {
    const found = compra.find(el => el.id == item.id);
  }

  let numberWidget = 0;
  const itemsQuantity = (array) => {
    array.forEach(element => {
      numberWidget = numberWidget + element.cantidad;
    });
  }
  itemsQuantity(compra);

  const cargarCarritoDeLocalStorage = () => {

    let storageCompra = JSON.parse(localStorage.getItem("Compra"));
    if (localStorage.getItem("Compra") !== null) { setCompra(storageCompra) };
  }

  const data = { compra, addItem, removeItem, clear, isInCart, numberWidget, usuario, login, logout, cargarCarritoDeLocalStorage, usuario }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider };

export default CartContext;


