//importo contexto
import React, { createContext, useState } from 'react';
import WishList from '../components/wishList/WishList';

//creo contexto 
const WishContext = createContext();
//creo el proveedor
const WishProvider = ({ children }) => {

  //Estado del contenido de los deseos
  const [wishItems, setWishItems] = useState([]);
  const [wished, setWished] = useState(false)

  //actualiza el local storage desde el contenido del carrito
  const updateCache = (array) => {
    const wishItemsJSON = JSON.stringify(array)
    if (array.length !== 0) { localStorage.setItem("Deseos", wishItemsJSON)  } 
    //else {localStorage.removeItem("Deseos") }
  
  }
  
  //fx para agregar items a la lista de deseos
  const addWish = (item) => {
    const found = wishItems.find(el => el.id == item.id);
    if (found) { 
      removeItem(found.id)
    } else { 
      setWishItems([...wishItems, item]); 
      setWished(true); 
      updateCache(wishItems) };
  }

  //fx para eliminar 1 item del carrito
  const removeItem = (id) => {
    const result = wishItems.filter(el => el.id !== id);
    setWishItems(result);
    updateCache(result);
    setWished(false);
  }
  updateCache(wishItems);

  /*
    //fx para vaciar el carrito
    const clear = () => {
      //console.log("limpiar")
      setCompra([]);
      localStorage.clear()
    }
  */

  //fx para averiguar si el item a agregar en el carrito ya está allí
  const isInWishItems = (item) => {
    const found = wishItems.find(el => el.id == item.id);
  }

  //al recargar la página dibuja la wishilist si no estaba vacía
  const cargarDeseosDeLocalStorage = () => {
    //saca del storage, pasa de string a array y muestra por consola:
    let storageDeseos = JSON.parse(localStorage.getItem("Deseos"));
    if (localStorage.getItem("Deseos") !== null) { setWishItems(storageDeseos) };
    console.log(storageDeseos)
  }

  //pongo en data todo lo que quiero compartir con los componentes
  const data = { wishItems, addWish, isInWishItems, cargarDeseosDeLocalStorage, removeItem, wished }

  return (
    <WishContext.Provider value={data}>
      {children}
    </WishContext.Provider>
  )
}

export { WishProvider };
//exporto contexto
export default WishContext;

