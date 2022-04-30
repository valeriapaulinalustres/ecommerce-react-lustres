import { useState } from "react";
import './ItemCount.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ stock, initial, onAdd, itemId }) => {

    const { compra } = useContext(CartContext);

    let itemIndex = compra.findIndex(el => el.id == itemId);
    let comprados = 0
    if (compra.length == 0) {
        comprados = 0
    } else {
        if (itemIndex !== -1) { comprados = compra[itemIndex].cantidad }
    }

    const itemsInStock = stock - comprados
 
    const [counter, setCounter] = useState(initial);
    const increase = () => {
        counter < itemsInStock
            ? setCounter(counter + 1)
            : toastMax();
    }

    const decrease = () => {
        counter > initial
            ? setCounter(counter - 1)
            : toastMin()
    }

    const handleOnAdd = () => {
        onAdd(counter);
    }

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