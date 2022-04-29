import Item from '../Item/Item.js';
import './ItemList.css';

export default function ItemList({ filtered }) {

    return (
        <div className=' card-container'>
            {filtered.map((item, index) => (
                <Item key={index} title={item.title} price={item.price} pictureUrl={item.pictureUrl} id={item.id} />
            ))}
        </div>
    )
}