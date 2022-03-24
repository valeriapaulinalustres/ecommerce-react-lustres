import { useEffect, useState } from 'react';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';

//array de productos
const data = [
    { id: 1, title: "Jazmín", price: 500, pictureUrl: "https://media.istockphoto.com/photos/gardenia-jasminoides-picture-id501234446?b=1&k=20&m=501234446&s=170667a&w=0&h=HYv2_quh3SdIyqgd4tGEgfu9mOirCTWEgI9Yc6bepN4=", description: "lorem..." },
    { id: 2, title: "Hortensia", price: 700, pictureUrl: "https://cdn.pixabay.com/photo/2019/07/06/18/06/flowers-4320891__340.jpg", description: "lorem..." },
    { id: 3, title: "Zinnia", price: 200, pictureUrl: "https://cdn.pixabay.com/photo/2018/07/05/19/01/tin-3518967__340.jpg", description: "lorem..." },
    { id: 4, title: "Rosa", price: 600, pictureUrl: "https://cdn.pixabay.com/photo/2017/03/05/01/10/roses-2117370__340.jpg", description: "lorem..." }

]

//promesa para obtener el array, con setTimeout para simular delay 
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        if (data == 0) {
            rej("no hay productos disponibles")
        } else {
            res(data)
            console.log(data)
        }

    }, 2000);
});

export function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        promise.then((products) => {
            setProducts(products);
        })
            .catch(() => {
                console.log("error")
            })
    }, []);


    //función que pasa a su hijo ItemCount para el evento del botón "agregar al carrito"
    const onAdd = (counter) => {
        console.log(counter);
    }

    return (
        <div>
            <h2>Bienvenido {greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemList products={products} />
        </div>

    )

}
