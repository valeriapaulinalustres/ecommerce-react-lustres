import { useEffect, useState } from 'react';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer.js';
/*

ASÍ FUNCIONABA ANTES
//array de productos
const data = [
    { id: 1, title: "Gardenia", price: 500, pictureUrl: "https://media.istockphoto.com/photos/gardenia-jasminoides-picture-id501234446?b=1&k=20&m=501234446&s=170667a&w=0&h=HYv2_quh3SdIyqgd4tGEgfu9mOirCTWEgI9Yc6bepN4=", category: "perennes", description: "lorem..." },
    { id: 2, title: "Hortensia", price: 700, pictureUrl: "https://cdn.pixabay.com/photo/2019/07/06/18/06/flowers-4320891__340.jpg", category: "perennes", description: "lorem..." },
    { id: 3, title: "Zinnia", price: 200, pictureUrl: "https://cdn.pixabay.com/photo/2018/07/05/19/01/tin-3518967__340.jpg", category: "anuales", description: "lorem..." },
    { id: 4, title: "Rosa", price: 600, pictureUrl: "https://cdn.pixabay.com/photo/2017/03/05/01/10/roses-2117370__340.jpg", category: "perennes", description: "lorem..." }

]


//promesa para obtener el array, con setTimeout para simular delay 
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        if (data == 0) {
            rej("no hay productos disponibles")
        } else {
            res(data)
            //    console.log(data);
        }
    }, 2000);
});

export function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    //para atrapar el id de la categoría/link cliqueada
    const { linkName } = useParams()
    //   console.log(linkName)

    useEffect(() => {

        promise.then((products) => {
            // console.log (products[2].category)
            if (linkName) {
                const filteredProducts = products.filter(product => product.category === linkName)
                //console.log(filteredProducts);
                setProducts(filteredProducts);
                setLoading(false)
            } else {
                setLoading(false)
                setProducts(products);
            }
        })
            .catch(() => {
                console.log("error")
            })
    }, [linkName]);

    //función que pasa a su hijo ItemCount para el evento del botón "agregar al carrito"
    const onAdd = (counter) => {
        console.log(counter);
    }













*/
export function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filtered, setFiltered] = useState([])

    //para atrapar el id de la categoría/link cliqueada
    const { linkName } = useParams()
    //   console.log(linkName)

const url= "https://fakestoreapi.com/products"

const getItems = async (url) =>{
    try{
        const response = await fetch (url);
        const data = await response.json();
        setProducts(data);
        setFiltered(data);
       
    }
    catch {
        setError(true)
    }
   finally {
    setLoading(false);
   }
   
}

useEffect(() => {
  getItems(url)

 
}, [linkName])

useEffect(() => {
   
    if (linkName) {
        const filteredProducts = products.filter(product => product.category === linkName)
        //console.log(filteredProducts);
        setFiltered(filteredProducts);
        setLoading(false)
    } else {
        setLoading(false);
        setFiltered(products);
    }
   
  }, [linkName])



    //función que pasa a su hijo ItemCount para el evento del botón "agregar al carrito"
    const onAdd = (counter) => {
        console.log(counter);
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            {loading
                ? (<Loading />)
                : error
                ? <span>error</span>
                : (<ItemList filtered={filtered} />)
            }
            
        </div>
    )
}
