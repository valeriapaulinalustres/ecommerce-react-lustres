//importo contexto
import React, { createContext, useEffect, useState } from 'react';



//creo contexto 
const CartContext = createContext();
//creo el proveedor
const CartProvider = ({ children }) => {
 
  //Estado del contenido del carrito
  const [compra, setCompra] = useState([])
  //console.log(compra)

  //Estado del usuario
  const [usuario, setUsuario] = useState({});


  
  //actualiza el local storage desde el contenido del carrito
  const updateCache = () => {
    const compraJSON = JSON.stringify(compra)
    if (compra.length !== 0) { localStorage.setItem("Compra", compraJSON)}

   

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
  console.log(usuario)

  //para salir del usuario

  const logout = () => {
    setUsuario({})
  }

  //fx para agregar items al carrito
  const addItem = (item, quantity) => {
    //console.log("agregar");
    //console.log(quantity)

    const found = compra.find(el => el.id == item.id);
    //console.log(item.id)

    const findDuplicated = (found, compras) => {
      compras.forEach(element => {
        if (found.id === element.id) {
          //  console.log("repetido");
          return element.cantidad = quantity + element.cantidad;

        }
      });
    }

    if (found) { findDuplicated(found, compra); } else { setCompra([...compra, item]); };
    updateCache()
  }
  /*
    useEffect(() => {
      
  updateCache()
    
    }, [compra])
    
  */

  //fx para eliminar 1 item del carrito
  const removeItem = (id) => {
    const result = compra.filter(el => el.id !== id);
    setCompra(result);
    updateCache()
  }

  //fx para vaciar el carrito
  const clear = () => {
    //console.log("limpiar")
    setCompra([]);
    localStorage.clear()
  }

  //fx para averiguar si el item a agregar en el carrito ya está allí
  const isInCart = (item) => {
    // console.log(item)
    const found = compra.find(el => el.id == item.id);
    //console.log(found);
  }

  //para calcular el numerito del cartWidget
  let numberWidget = 0;
  const itemsQuantity = (array) => {
    array.forEach(element => {
      numberWidget = numberWidget + element.cantidad;
    });
  }
  itemsQuantity(compra);
  // console.log(numberWidget);







  //al recargar la página dibuja el carrito si no estaba vacío
  const cargarCarritoDeLocalStorage = () => {

    //saca del storage, pasa de string a array y muestra por consola:
    let storageCompra = JSON.parse(localStorage.getItem("Compra"));
    if (localStorage.getItem("Compra") !== null) {setCompra(storageCompra)};

    console.log(storageCompra)

  }


  //pongo en data todo lo que quiero compartir con los componentes
  const data = { compra, addItem, removeItem, clear, isInCart, numberWidget, usuario, login, logout, cargarCarritoDeLocalStorage }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider };
//exporto contexto
export default CartContext;


/*
//FUNCIONES RELACIONADAS AL LOCAL STORAGE

//actualiza el local storage desde el contenido del carrito
const updateCache = () => {
    const compraJSON = JSON.stringify(compra)
    localStorage.setItem("Compra", compraJSON)
}

//saca del storage, pasa de string a array y muestra por consola:
let storageItems = JSON.parse(localStorage.getItem("CART"));

//al recargar la página dibuja el carrito si no estaba vacío
function cargarCarritoDeLocalStorage() {
    if (localStorage.getItem("CART") !== null) {
        CART = storageItems
    }
}
*/

