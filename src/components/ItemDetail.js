

function ItemDetail({item}) {
  return (
    
    <div className="a-card" >
        <h2>ItemDetail</h2>
            <div className="card text-center">
                <img src={item.pictureUrl} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-text">Precio ${item.price}</p>
                    <p className="card-text">Stock disponible: {item.stock}</p>
                    <p className="card-text">Descripción: {item.description}</p>
                   
                </div>
            </div>

        </div>
  )
}

export default ItemDetail