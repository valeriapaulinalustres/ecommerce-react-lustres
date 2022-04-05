import Item from './Item.js';
import ItemDetailContainer from './ItemDetailContainer.js';
import './ItemList.css'


export default function ItemList({ filtered }) {
    // console.log(products)
    return (
        <div >
            <div className='col-sm-2 card-container'>
                {filtered.map((item, index) => (
                    <Item key={index} title={item.title} price={item.price} image={item.image} id={item.id} />
                ))}
               
            </div>
        </div>
    )
}