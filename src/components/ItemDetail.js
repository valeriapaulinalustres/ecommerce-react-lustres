import './itemDetailContainer.css'

function ItemDetail({ item }) {
   // console.log(item);
    return (
        <div className="a-card" >           
            <div className="card text-center">
                <img src={item[0].pictureUrl} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">{item[0].title}</h2>
                    <p className="card-text">Precio ${item[0].price}</p>
                    <p className="card-text">Stock disponible: {item[0].stock}</p>
                    <p className="card-text">Descripción: {item[0].description}</p>
                </div>
            </div>           
        </div>
    )
}

export default ItemDetail