//importo contexto
import React, { createContext, useState } from 'react';


//creo contexto 
const CartContext = createContext();

//creo el proveedor
const CartProvider = ({ children }) => {

  //Estado del contenido del carrito
  const [compra, setCompra] = useState([])
  console.log(compra)



  //fx para agregar items al carrito
  const addItem = (item, quantity) => {
    //console.log("agregar");
    //console.log(quantity)
    const found = compra.find(el => el.id == item.id);

    const findDuplicated = (found, compra) => {
      compra.forEach(element => {
        if (found.id === element.id) {
          //  console.log("repetido");
          return element.cantidad = quantity + element.cantidad
        }
      });
    }
    if (found) { findDuplicated(found, compra) } else { setCompra([...compra, item]) }
  }


  //fx para eliminar 1 item del carrito
  const removeItem = (id) => {
    const result = compra.filter(el => el.id !== parseInt(id));
    setCompra(result)
  }


  //fx para vaciar el carrito
  const clear = () => {
    console.log("limpiar")
    setCompra([])
  }

  //fx para averiguar si el item a agregar en el carrito ya está allí
  const isInCart = (item) => {
    // console.log(item)
    const found = compra.find(el => el.id == item.id);
    console.log(found);
  }




//para calcular total de la compra
let totalCompra = 0;
const total = (array) =>{
  let subtotal = 0;
 
  array.forEach(element => {
    subtotal = element.cantidad * element.precio;
   // console.log(subtotal)
totalCompra = totalCompra + subtotal;
return totalCompra;
    
  });
}
total(compra)
//console.log(totalCompra);


//para calcular el numerito del cartWidget

let numberWidget=0;
const itemsQuantity = (array) =>{
  array.forEach(element => {
    numberWidget = numberWidget + element.cantidad;
    
  });
}
itemsQuantity(compra);
console.log(numberWidget);




  //pongo en data todo lo que quiero compartir con los componentes
  const data = { compra, addItem, removeItem, clear, isInCart, totalCompra, numberWidget }

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )


}

export { CartProvider };
//exporto contexto
export default CartContext;



