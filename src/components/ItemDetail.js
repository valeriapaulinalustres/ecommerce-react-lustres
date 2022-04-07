import './itemDetailContainer.css';
import ItemCount from './ItemCount.js';
import { useState } from 'react';
import './itemDetail.css';
import { NavLink, Link } from 'react-router-dom';

function ItemDetail({ item }) {

    const [added, setAdded] = useState(0)
    const [buy, setBuy] = useState(true)
    //función que pasa a su hijo ItemCount para el evento del botón "agregar al carrito"
    const onAdd = (counter) => {
        console.log(counter);
        setAdded(counter);
        setBuy(false)

    }




    // console.log(item);
    return (
        <div className="detail-container">
            <div className="detail-container-son">
                <img src={item[0].pictureUrl} className="detail-image" width="100%"/>
                <div className="detail-details">

                    <div className="j">
                        <h2 className="detail-title">{item[0].title}</h2>
                        <p className="detail-text">Precio ${item[0].price}</p>
                        <p className="detail-text">Stock disponible: {item[0].stock}</p>


                    </div>
                    <div className='detail-buttons'>
                        {buy
                            ? (<ItemCount stock={5} initial={1} onAdd={onAdd} />)
                            : (<NavLink to="/cart"><button className="button">Finalizar compra</button></NavLink>)
                        }
                    </div>



                </div>
            </div>

            <p className="detail-text">Descripción: {item[0].description}</p>
        </div>

    )
}

export default ItemDetail

