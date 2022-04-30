//importo contexto
import React, { createContext, useState } from 'react';

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
    //debe tener el if length !==0 porque de lo contrario, al reiniciar y encontrar el estado vacío, llega con el local storage cargado pero lo borra a causa del array vacío
    if (array.length !== 0) { localStorage.setItem("Deseos", wishItemsJSON) }
  }

  const updateCacheRemove = (array) => {
    const wishItemsJSON = JSON.stringify(array)
    localStorage.setItem("Deseos", wishItemsJSON)
  }

  //fx para agregar items a la lista de deseos
  const addWish = (item) => {
    const found = wishItems.find(el => el.id == item.id);
    if (found) {
      removeItem(found.id)
    } else {
      setWishItems([...wishItems, item]);
      setWished(true);
      updateCache(wishItems)
    };
  }

  //fx para eliminar 1 item del carrito
  const removeItem = (id) => {
    const result = wishItems.filter(el => el.id !== id);
    setWishItems(result);

    updateCacheRemove(result);
    setWished(false);
  }
  //escribo esta acá suelta porque de lo contrario actualiza el localstorage primero y luego carga el estado, por lo cual el localstorage se actualiza recién con el siguiente item cliqueado a la lista de deseos
  updateCache(wishItems);

  //fx para vaciar la lista de deseos
  const clearWishes = () => {
    setWishItems([]);
    localStorage.removeItem("Deseos")
  }

  //fx para averiguar si el item a agregar en el carrito ya está allí
  const isInWishItems = (item) => {
    const found = wishItems.find(el => el.id == item.id);
  }

  //al recargar la página dibuja la wishilist si no estaba vacía
  const cargarDeseosDeLocalStorage = () => {
    //saca del storage, pasa de string a array y muestra por consola:
    let storageDeseos = JSON.parse(localStorage.getItem("Deseos"));
    if (localStorage.getItem("Deseos") !== null) { setWishItems(storageDeseos) };
  }

  //pongo en data todo lo que quiero compartir con los componentes
  const data = { wishItems, addWish, isInWishItems, cargarDeseosDeLocalStorage, removeItem, wished, clearWishes }

  return (
    <WishContext.Provider value={data}>
      {children}
    </WishContext.Provider>
  )
}

export { WishProvider };
//exporto contexto
export default WishContext;

