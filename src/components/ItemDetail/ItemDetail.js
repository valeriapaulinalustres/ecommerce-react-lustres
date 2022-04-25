import '../../containers/ItemDetail/itemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount.js';
import { useState } from 'react';
import './itemDetail.css';
import { NavLink, Link } from 'react-router-dom';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

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
        let newProduct = { nombre: item.title, precio: item.price, id: item.id, imagen: item.pictureUrl, cantidad: added }
//console.log(item.id);
        //console.log(newProduct);
        isInCart(newProduct)
        addItem(newProduct, added);
    }

     //console.log(item.title);
    return (
        <div className="detail-container">
            <div className="detail-container-son">
                <img src={item.pictureUrl} className="detail-image" width="100%" />
                <div className="detail-details">
                    <div className="j">
                        <h2 className="detail-title">{item.title}</h2>
                        <p>Precio: ${item.price}</p>
                        <p>Stock disponible: {item.stock}</p>
                    </div>
                    <div className='detail-buttons'>
                        {buy
                            ? (<ItemCount stock={item.stock} initial={1} onAdd={onAdd} itemId={item.id} />)
                            : (<NavLink to="/cart"><button id={item.id} className="button" onClick={handleAddClick} >Finalizar compra</button></NavLink>)
                        }
                    </div>
                </div>
            </div>
            <p className="detail-text">Descripción: {item.description}</p>
        </div>
    )
}

export default ItemDetail

