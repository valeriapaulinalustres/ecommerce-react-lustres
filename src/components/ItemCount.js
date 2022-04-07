import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {

    //destructuración 
    const [counter, setCounter] = useState(initial);

    //evento del botón de suma
    const increase = () => {
        counter < stock
            ? setCounter(counter + 1)
            : alert("no hay suficiente stock");
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