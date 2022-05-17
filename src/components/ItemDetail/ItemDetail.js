import '../../containers/ItemDetail/itemDetailContainer.css';
import ItemCount from '../ItemCount/ItemCount.js';
import { useState } from 'react';
import './itemDetail.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import WishContext from '../../context/WishContext';

function ItemDetail({ item }) {

    const [added, setAdded] = useState(0)
    const [buy, setBuy] = useState(true)

    const onAdd = (counter) => {
        setAdded(counter);
        setBuy(false)
    }

    const { addItem, isInCart } = useContext(CartContext);
    const { wishItems, addWish } = useContext(WishContext);

    const handleAddClick = (event) => {
        let newProduct = { nombre: item.title, precio: item.price, id: item.id, imagen: item.pictureUrl, cantidad: added }
        isInCart(newProduct)
        addItem(newProduct, added);
    }

    const handleOnOff = () => {
        let newProduct = { nombre: item.title, precio: item.price, id: item.id, imagen: item.pictureUrl }
        addWish(newProduct);
    }

    return (
        <div className="detail-container">
            <div className="detail-container-son">
                <div className='container-img-crop'>
                <img src={item.pictureUrl} className="detail-image crop" width="100%" />
                </div>
                
                <div className="detail-details">
                    <div className="detail-main">
                        <h2 className="detail-title">{item.title}</h2>
                        <button className={wishItems.find(el => el.id == item.id) ? 'button-true' : 'button-false'} onClick={handleOnOff}>❤️</button>
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

