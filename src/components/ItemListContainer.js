import ItemCount from './ItemCount.js'


export function ItemListContainer({ greeting }) {

    //función que pasa a su hijo ItemCount para el evento del botón "agregar al carrito"
    const onAdd = (counter) => {
        console.log(counter);
    }

    return (
        <div>
            <h2>Bienvenido {greeting}</h2>
            <p>Aquí irá el Catálogo</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>

    )

}
