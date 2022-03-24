import Item from './Item.js';
import './ItemList.css'


export default function ItemList({ products }) {
    return (
        <div>
            <h1>Catálogo de productos</h1>
            <div >

                <div className='col-sm-12 card-container'>
                {products.map((item) => (
                <Item key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} />

            ))}
                </div>
            </div>
            
        </div>

    )
}