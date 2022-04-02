import Item from './Item.js';
import './ItemList.css'


export default function ItemList({ products }) {
    // console.log(products)
    return (
        <div >
            <div className='col-sm-12 card-container'>
                {products.map((item, index) => (
                    <Item key={index} title={item.title} price={item.price} pictureUrl={item.pictureUrl} id={item.id} />
                ))}
            </div>
        </div>
    )
}