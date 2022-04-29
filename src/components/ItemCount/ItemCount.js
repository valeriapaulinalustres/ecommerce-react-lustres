import { useState } from "react";
import './ItemCount.css';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
//toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ stock, initial, onAdd, itemId }) => {

    //trae cosas desde el context
    const { compra } = useContext(CartContext);

    //obtengo el índice del objeto del carrito al cual voy a volver a comprar
    let itemIndex = compra.findIndex(el => el.id == itemId);
    // condicional para que "comprados" sea la cantidad de items que ya tiene el carrito
    let comprados = 0
    if (compra.length == 0) {
        comprados = 0
    } else {
        if (itemIndex !== -1) { comprados = compra[itemIndex].cantidad }
    }

    //stock viene de data.js 
    const itemsInStock = stock - comprados
 
    //destructuración 
    const [counter, setCounter] = useState(initial);
    //evento del botón de suma
    const increase = () => {
        counter < itemsInStock
            ? setCounter(counter + 1)
            : toastMax();
    }

    //evento del botón de resta
    const decrease = () => {
        counter > initial
            ? setCounter(counter - 1)
            : toastMin()
    }

    //evento del botón "agregar al carro" que ejecuta la acción onAdd enviada como prop por su padre
    const handleOnAdd = () => {
        onAdd(counter);
    }

    //toastify
    const toastMin = () => {
        toast('Compra mínima permitida: ' + initial + ' unidad', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const toastMax = () => {
        toast('No hay suficiente stock. Usted ya tiene en el carrito: ' + comprados + ' unidades.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="count-container">
            <div className="count-buttons">
                <button className="button" onClick={decrease}>➖</button>
                <span className="value">{counter}</span>
                <button className="button" onClick={increase}>➕</button>
            </div>
            <button onClick={handleOnAdd} className="countAdd button" >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount