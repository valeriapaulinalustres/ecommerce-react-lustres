import React, { createContext, useState } from 'react';

const WishContext = createContext();

const WishProvider = ({ children }) => {

  const [wishItems, setWishItems] = useState([]);
  const [wished, setWished] = useState(false)
 
  const updateCache = (array) => {
    const wishItemsJSON = JSON.stringify(array)
    if (array.length !== 0) { localStorage.setItem("Deseos", wishItemsJSON) }
  }

  const updateCacheRemove = (array) => {
    const wishItemsJSON = JSON.stringify(array)
    localStorage.setItem("Deseos", wishItemsJSON)
  }

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

  const removeItem = (id) => {
    const result = wishItems.filter(el => el.id !== id);
    setWishItems(result);
    updateCacheRemove(result);
    setWished(false);
  }
  updateCache(wishItems);

  const clearWishes = () => {
    setWishItems([]);
    localStorage.removeItem("Deseos")
  }

  const isInWishItems = (item) => {
    const found = wishItems.find(el => el.id == item.id);
  }

  const cargarDeseosDeLocalStorage = () => {
    let storageDeseos = JSON.parse(localStorage.getItem("Deseos"));
    if (localStorage.getItem("Deseos") !== null) { setWishItems(storageDeseos) };
  }

  const data = { wishItems, addWish, isInWishItems, cargarDeseosDeLocalStorage, removeItem, wished, clearWishes }

  return (
    <WishContext.Provider value={data}>
      {children}
    </WishContext.Provider>
  )
}

export { WishProvider };

export default WishContext;

