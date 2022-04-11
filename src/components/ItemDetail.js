import './itemDetailContainer.css';
import ItemCount from './ItemCount.js';
import { useState } from 'react';
import './itemDetail.css';
import { NavLink, Link } from 'react-router-dom';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function ItemDetail({ item }) {

    const [added, setAdded] = useState(0)
    const [buy, setBuy] = useState(true)
    //función que pasa a su hijo ItemCount para el evento del botón "agregar al carrito"
    const onAdd = (counter) => {
        //     console.log(counter);
        setAdded(counter);
        setBuy(false)

    }
    //trae cosas desde el context
    const { compra, addItem, isInCart } = useContext(CartContext);
    //  console.log(compra)


    const handleAddClick = (event) => {

        //describe las propiedades de cada objeto del array del carrito ("compra")
        let newProduct = { nombre: item[0].title, precio: item[0].price, id: item[0].id, cantidad: added }

        //console.log(newProduct);
        isInCart(newProduct)
        addItem(newProduct, added);
    }

    // console.log(item);
    return (
        <div className="detail-container">
            <div className="detail-container-son">
                <img src={item[0].pictureUrl} className="detail-image" width="100%" />
                <div className="detail-details">
                    <div className="j">
                        <h2 className="detail-title">{item[0].title}</h2>
                        <p className="detail-text">Precio ${item[0].price}</p>
                        <p className="detail-text">Stock disponible: {item[0].stock}</p>
                    </div>
                    <div className='detail-buttons'>
                        {buy
                            ? (<ItemCount stock={item[0].stock} initial={1} onAdd={onAdd} itemId={item[0].id}/>)
                            : (<NavLink to="/cart"><button id={item[0].id} className="button" onClick={handleAddClick} >Finalizar compra</button></NavLink>)
                        }
                    </div>
                </div>
            </div>
            <p className="detail-text">Descripción: {item[0].description}</p>
        </div>
    )
}

export default ItemDetail

