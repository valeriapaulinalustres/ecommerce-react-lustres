import { NavLink } from 'react-router-dom';
import './Item.css';


export default function Item({ id, title, price, pictureUrl}) {

    return (
        <NavLink to={`item/${id}`} className="a-card" >
            <div className="card text-center">
                <img src={pictureUrl} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">${price}</p>
                    <button className='button'>ver detalle</button>
                </div>
            </div>
        </NavLink>
    )
}


