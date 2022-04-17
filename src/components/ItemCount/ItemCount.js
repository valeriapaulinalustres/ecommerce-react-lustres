import { useState } from "react";
import './ItemCount.css';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const ItemCount = ({ stock, initial, onAdd, itemId }) => {

    //trae cosas desde el context
    const { compra } = useContext(CartContext);
    //console.log(compra)

    //obtengo el índice del objeto del carrito al cual voy a volver a comprar
    let itemIndex = compra.findIndex(el => el.id == itemId);

    // condicional para que "comprados" sea la cantidad de items que ya tiene el carrito
    let comprados = 0

    if (compra.length == 0) {
        comprados = 0
    } else {
        if (itemIndex !== -1) { comprados = compra[itemIndex].cantidad }
    }

    //        console.log(comprados)
    //stock viene de data.js 
    const itemsInStock = stock - comprados
    console.log(itemsInStock)

    //destructuración 
    const [counter, setCounter] = useState(initial);
    //console.log(counter)
    //evento del botón de suma
    const increase = () => {
        counter < itemsInStock// debería ser counter < itemsInStock  (stock - compra.quantity)
            ? setCounter(counter + 1)
            : alert("No hay suficiente stock. Usted ya tiene en el carrito: " + comprados + " unidades.");
    }

    //evento del botón de resta
    const decrease = () => {
        counter > initial
            ? setCounter(counter - 1)
            : alert("compra mínima permitida: " + initial);
    }

    //evento del botón "agregar al carro" que ejecuta la acción onAdd enviada como prop por su padre
    const handleOnAdd = () => {
        onAdd(counter);
    }

    return (
        <div className="countContainer">
            <div className="countButtons">
                <button className="button" onClick={decrease}>➖</button>
                <span className="value">{counter}</span>
                <button className="button" onClick={increase}>➕</button>
            </div>
            <button onClick={handleOnAdd} className="countAdd button" >agregar al carrito 🛒</button>
        </div>
    )
}

export default ItemCount